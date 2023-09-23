import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  jsxFramework: 'react',

  // Where to look for your css declarations
  include: [
    './src/ui/**/*.{ts,tsx,js,jsx}',
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/app/**/*.{ts,tsx,js,jsx}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          fira: { value: 'var(--font-fira-code), Menlo, monospace' },
          anybody: { value: 'var(--font-anybody), cursive' },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
