import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: 'https://hot-karaoke.net',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,

      serialize(item) {
        const url = item.url.toLowerCase();

        // 1단계: 홈페이지 (최우선)
        if (url === 'https://hot-karaoke.net/' || url.endsWith('.com/')) {
          return {
            ...item,
            priority: 1.0,
            changefreq: 'daily',
            lastmod: new Date().toISOString(),
          };
        }

        // 2단계: 메인 가이드 페이지 (Pillar Content)
        if (
          url.includes('-guide') &&
          !url.includes('/faq') &&
          !url.includes('/page/') &&
          !url.includes('-vs-')
        ) {
          return {
            ...item,
            priority: 0.9,
            changefreq: 'weekly',
          };
        }

        // 2-1단계: 비교 페이지 (vs 페이지)
        if (url.includes('-vs-')) {
          return {
            ...item,
            priority: 0.85,
            changefreq: 'monthly',
          };
        }

        // 3단계: 개별 블로그 포스트
        if (url.includes('/blog/') && !url.includes('/page/')) {
          return {
            ...item,
            priority: 0.8,
            changefreq: 'monthly',
          };
        }

        // 3-1단계: FAQ 페이지
        if (url.includes('/faq')) {
          return {
            ...item,
            priority: 0.75,
            changefreq: 'monthly',
          };
        }

        // 4단계: 블로그 목록 및 페이지네이션
        if (url.includes('/blog')) {
          return {
            ...item,
            priority: 0.6,
            changefreq: 'weekly',
          };
        }

        // 5단계: Contact, Marketing 페이지
        if (url.includes('/contact') || url.includes('/marketing')) {
          return {
            ...item,
            priority: 0.5,
            changefreq: 'monthly',
          };
        }

        // 6단계: 법적 페이지 (Privacy, Terms)
        if (url.includes('/privacy') || url.includes('/terms')) {
          return {
            ...item,
            priority: 0.3,
            changefreq: 'yearly',
          };
        }

        // 기본값
        return {
          ...item,
          priority: 0.7,
          changefreq: 'weekly',
        };
      },

      filter: (page) => {
        const excludePatterns = ['/404', '/api/', '/_astro/', '/admin/', '/internal/', '.json', '.xml'];
        return !excludePatterns.some((pattern) => page.includes(pattern));
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    ssr: {
      noExternal: ['lucide-astro'],
    },
    build: {
      cssMinify: true,
    },
  },
});
