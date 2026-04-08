import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        moon: '#6f7bd6',
        dusk: '#ff8ca3',
        solar: '#ffb347',
      },
    },
  },
  plugins: [],
};

export default config;
