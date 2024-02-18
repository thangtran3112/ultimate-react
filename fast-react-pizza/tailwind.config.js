/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    //overwrite the entire existing fons (sans) into 'Roboto Mono'
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },
    extend: {
      // fontSize: {
      //   huge: ['80rem', { lineHeight: '1' }],
      // },
      //modify only height.screen
      height: {
        screen: '100dvh',
      },
    },
    // screens: {
    //   'tablet': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },
  },
  plugins: [],
};
