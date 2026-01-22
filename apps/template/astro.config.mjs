import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bundanghipublic.com', // 지역별 도메인으로 변경
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // 특정 페이지 priority 설정
      serialize(item) {
        if (item.url === '/') {
          item.priority = 1.0;
        }
        if (item.url.includes('-guide')) {
          item.priority = 0.9;
        }
        if (item.url.includes('/faq')) {
          item.priority = 0.7;
        }
        return item;
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
