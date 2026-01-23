import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: 'https://high-karaoke.com',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,

      serialize(item) {
        const url = item.url.toLowerCase();

        // 1단계: 홈페이지 (최우선)
        if (url === 'https://high-karaoke.com/' || url.endsWith('.com/')) {
          return {
            ...item,
            priority: 1.0,
            changefreq: 'daily',
            lastmod: new Date().toISOString(),
          };
        }

        // 2단계: 주요 역세권 가이드 (위치별 차별화)
        // 강남역 = 최고 검색량
        if (url.includes('gangnam-station-guide')) {
          return {
            ...item,
            priority: 0.95,
            changefreq: 'weekly',
            lastmod: new Date().toISOString(),
          };
        }

        // 역삼동 = 주요 유흥가
        if (url.includes('gangnam-yeoksam-guide')) {
          return {
            ...item,
            priority: 0.88,
            changefreq: 'weekly',
            lastmod: new Date().toISOString(),
          };
        }

        // 논현동 = 보조 지역
        if (url.includes('gangnam-nonhyeon-guide')) {
          return {
            ...item,
            priority: 0.80,
            changefreq: 'monthly',
            lastmod: new Date().toISOString(),
          };
        }

        // 2-1단계: 초보자 가이드 (Pillar Content)
        if (url.includes('-beginner-guide') || url.includes('-price-guide')) {
          return {
            ...item,
            priority: 0.88,
            changefreq: 'weekly',
            lastmod: new Date().toISOString(),
          };
        }

        // 3단계: 메인 가이드 페이지 (Pillar Content)
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
            lastmod: new Date().toISOString(),
          };
        }

        // 3-1단계: 비교 페이지 (vs 페이지)
        if (url.includes('-vs-')) {
          return {
            ...item,
            priority: 0.85,
            changefreq: 'monthly',
          };
        }

        // 4단계: FAQ 페이지 (Featured Snippet 최적화)
        if (url.includes('/faq')) {
          return {
            ...item,
            priority: 0.8,
            changefreq: 'monthly',
          };
        }

        // 5단계: 개별 블로그 포스트
        if (url.includes('/blog/') && !url.includes('/page/')) {
          return {
            ...item,
            priority: 0.8,
            changefreq: 'monthly',
          };
        }

        // 6단계: 블로그 목록 (page 1만)
        if (url.includes('/blog') && !url.includes('/page/')) {
          return {
            ...item,
            priority: 0.6,
            changefreq: 'weekly',
          };
        }

        // 7단계: Contact, Marketing 페이지
        if (url.includes('/contact') || url.includes('/marketing')) {
          return {
            ...item,
            priority: 0.5,
            changefreq: 'monthly',
          };
        }

        // 8단계: 법적 페이지 (Privacy, Terms)
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
        const excludePatterns = [
          '/404',
          '/api/',
          '/_astro/',
          '/admin/',
          '/internal/',
          '.json',
          '.xml',
          '/page/2',
          '/page/3',
          '/page/4',
          '/page/5',
          '/search?',
        ];
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
