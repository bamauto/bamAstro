import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getBlogPosts } from '@/lib/supabase';
import { region } from '@/config/region';

export async function GET(context: APIContext) {
  const posts = await getBlogPosts();

  return rss({
    title: `${region.name} 유흥 가이드 | ${region.domain}`,
    description: `${region.name} 가라오케, 하이퍼블릭, 유흥 정보 블로그.`,
    site: context.site || `https://${region.domain}`,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.published_at || post.created_at),
      description: post.excerpt,
      link: `/blog/${post.slug}/`,
      categories: [post.category],
    })),
    customData: `<language>ko-KR</language>`,
  });
}
