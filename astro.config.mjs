import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://runbook-projects.github.io/dev-summit-2026',
  base: '/dev-summit-2026',
  output: 'static',
  build: {
    assets: 'assets',
  },
});