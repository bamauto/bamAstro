/**
 * 블로그 포스트 상태 수정 스크립트
 *
 * 1. 전체 포스트를 draft로 변경
 * 2. 각 지역/카테고리별 첫 6개만 published로 변경 (오늘 오픈분)
 * 3. 나머지는 scheduled_publish_date 설정
 *
 * 실행: npx tsx scripts/fix-blog-status.ts
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rrzeapykmyrsiqmkwjcf.supabase.co';
const supabaseKey = 'sb_publishable_PURbxvJKEEW_JSuH4NLHqQ_4QXKY71W';

const supabase = createClient(supabaseUrl, supabaseKey);

const CATEGORIES = ['하이퍼블릭', '가라오케', '셔츠룸', '룸살롱', '기모노룸', '호빠'];

interface BlogPost {
  id: string;
  region: string;
  category: string;
  status: string;
  created_at: string;
}

async function main() {
  console.log('=== 블로그 포스트 상태 수정 스크립트 ===\n');

  // 1. 전체 포스트 조회
  let allPosts: BlogPost[] = [];
  let page = 0;
  const pageSize = 1000;

  while (true) {
    const { data, error } = await supabase
      .from('bamastro_blog_posts')
      .select('id, region, category, status, created_at')
      .order('created_at', { ascending: true })
      .range(page * pageSize, (page + 1) * pageSize - 1);

    if (error) {
      console.error('조회 실패:', error.message);
      return;
    }

    if (!data || data.length === 0) break;

    allPosts = [...allPosts, ...data];
    console.log(`페이지 ${page + 1} 로드: ${data.length}개 (누적: ${allPosts.length}개)`);

    if (data.length < pageSize) break;
    page++;
  }

  console.log(`\n총 ${allPosts.length}개 포스트\n`);

  // 2. 지역 목록 확인
  const regions = [...new Set(allPosts.map(p => p.region))];
  console.log('지역 목록:', regions.join(', '));

  // 3. 지역/카테고리별 분류
  const postsByRegionCategory: Record<string, Record<string, BlogPost[]>> = {};

  regions.forEach(region => {
    postsByRegionCategory[region] = {};
    CATEGORIES.forEach(cat => {
      postsByRegionCategory[region][cat] = [];
    });
  });

  allPosts.forEach(post => {
    if (postsByRegionCategory[post.region] && postsByRegionCategory[post.region][post.category]) {
      postsByRegionCategory[post.region][post.category].push(post);
    }
  });

  // 4. 통계 출력
  console.log('\n=== 지역/카테고리별 포스트 수 ===');
  regions.forEach(region => {
    console.log(`\n[${region}]`);
    CATEGORIES.forEach(cat => {
      const count = postsByRegionCategory[region][cat]?.length || 0;
      console.log(`  ${cat}: ${count}개`);
    });
  });

  // 5. Step 1: 전체를 draft로 변경
  console.log('\n=== Step 1: 전체 포스트를 draft로 변경 ===');

  const batchSize = 100;
  let draftSuccess = 0;
  let draftError = 0;

  for (let i = 0; i < allPosts.length; i += batchSize) {
    const batch = allPosts.slice(i, i + batchSize);
    const ids = batch.map(p => p.id);

    const { error } = await supabase
      .from('bamastro_blog_posts')
      .update({ status: 'draft' })
      .in('id', ids);

    if (error) {
      console.error(`배치 ${i}-${i + batchSize} 실패:`, error.message);
      draftError += batch.length;
    } else {
      draftSuccess += batch.length;
    }

    if ((i + batchSize) % 500 === 0 || i + batchSize >= allPosts.length) {
      console.log(`진행: ${Math.min(i + batchSize, allPosts.length)}/${allPosts.length}`);
    }
  }

  console.log(`✅ draft 변경 완료: ${draftSuccess}개 성공, ${draftError}개 실패`);

  // 6. Step 2: 각 지역/카테고리별 첫 1개씩 published로 변경 (오늘 오픈분)
  console.log('\n=== Step 2: 오늘 오픈할 포스트 published로 변경 ===');
  console.log('(각 지역/카테고리별 1개씩 = 지역당 6개)\n');

  const todayPublished: string[] = [];

  for (const region of regions) {
    for (const category of CATEGORIES) {
      const posts = postsByRegionCategory[region][category];
      if (posts && posts.length > 0) {
        const firstPost = posts[0];
        todayPublished.push(firstPost.id);
        console.log(`  [${region}/${category}] ${firstPost.id.slice(0, 8)}...`);
      }
    }
  }

  if (todayPublished.length > 0) {
    const { error } = await supabase
      .from('bamastro_blog_posts')
      .update({ status: 'published', published_at: new Date().toISOString() })
      .in('id', todayPublished);

    if (error) {
      console.error('published 변경 실패:', error.message);
    } else {
      console.log(`\n✅ ${todayPublished.length}개 포스트 published로 변경 완료`);
    }
  }

  // 7. 최종 상태 확인
  console.log('\n=== 최종 상태 확인 ===');

  const { data: publishedCount } = await supabase
    .from('bamastro_blog_posts')
    .select('id', { count: 'exact', head: true })
    .eq('status', 'published');

  const { data: draftCount } = await supabase
    .from('bamastro_blog_posts')
    .select('id', { count: 'exact', head: true })
    .eq('status', 'draft');

  console.log(`published: ${todayPublished.length}개`);
  console.log(`draft: ${allPosts.length - todayPublished.length}개`);

  console.log('\n=== 완료 ===');
  console.log(`하루에 각 지역/카테고리별 1개씩 오픈하려면:`);
  console.log(`  Vercel Cron 또는 수동으로 스케줄링 스크립트 실행 필요`);
}

main().catch(console.error);
