/**
 * 동탄 블로그 포스트 확인 스크립트
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rrzeapykmyrsiqmkwjcf.supabase.co';
const supabaseKey = 'sb_publishable_PURbxvJKEEW_JSuH4NLHqQ_4QXKY71W';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkDongtanPosts() {
  console.log('=== 동탄 블로그 포스트 확인 ===\n');

  // 1. 동탄 포스트 수 확인
  const { count: dongtanCount } = await supabase
    .from('bamastro_blog_posts')
    .select('*', { count: 'exact', head: true })
    .eq('region', 'dongtan');

  console.log(`동탄 포스트 수: ${dongtanCount || 0}개\n`);

  // 2. 지역별 분포 확인
  const { data: allPosts } = await supabase
    .from('bamastro_blog_posts')
    .select('region');

  if (allPosts) {
    const regionCount: Record<string, number> = {};
    allPosts.forEach(p => {
      regionCount[p.region] = (regionCount[p.region] || 0) + 1;
    });

    console.log('지역별 블로그 포스트 분포:');
    Object.entries(regionCount).sort((a, b) => b[1] - a[1]).forEach(([region, cnt]) => {
      console.log(`  ${region}: ${cnt}개`);
    });
  }

  // 3. 동탄 포스트 샘플 (있다면)
  if (dongtanCount && dongtanCount > 0) {
    const { data: samples } = await supabase
      .from('bamastro_blog_posts')
      .select('id, title, category, excerpt')
      .eq('region', 'dongtan')
      .limit(5);

    console.log('\n동탄 포스트 샘플:');
    samples?.forEach((post, i) => {
      console.log(`${i + 1}. [${post.category}] ${post.title}`);
      console.log(`   요약: ${post.excerpt?.substring(0, 60)}...`);
    });
  }
}

checkDongtanPosts().catch(console.error);
