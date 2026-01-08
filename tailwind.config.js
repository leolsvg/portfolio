/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C07B60',
        secondary: '#FBF8F5',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
  // Minimize CSS output
  safelist: [],
  important: false,
};

export default config;
