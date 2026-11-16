import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Cloudflare Pages 환경 감지
const isCloudflare = process.env.CF_PAGES === '1';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  // Cloudflare Pages: https://하온.com
  // GitHub Pages: https://jjj4531.github.io/haon_labor_web
  site: isGitHubPages ? 'https://jjj4531.github.io' : 'https://하온.com',
  base: isGitHubPages ? '/haon_labor_web' : '/',
  integrations: [tailwind()],
  output: 'static', // Cloudflare Pages는 static 모드 사용
});
