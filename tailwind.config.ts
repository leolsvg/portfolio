/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  // Performance optimizations
  corePlugins: {
    preflight: true,
  },
  // Minimal CSS output
  safelist: [],
};
