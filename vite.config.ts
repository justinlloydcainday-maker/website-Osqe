import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  // Support GitHub Actions deployment where GITHUB_REPOSITORY is defined (e.g. "user/repo")
  // Support GitHub Actions deployment where GITHUB_REPOSITORY is defined (e.g. "user/repo")
  // Or manual base specification via BASE_PATH env var
  const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : null;
  const rawBase = process.env.BASE_PATH || (repoName ? `/${repoName}/` : './');
  const base = rawBase === './' ? './' : (rawBase.endsWith('/') ? rawBase : `${rawBase}/`);

  const currentDir = typeof import.meta.dirname !== 'undefined' ? import.meta.dirname : process.cwd();

  return {
    base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(currentDir, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
