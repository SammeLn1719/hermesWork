/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-blue': '#080F5B',
        'slightly-dark-blue':'#0D19A3',
        'light-green':"#15DB95",
        'leather':'#F4E4C1',
        'sand':'#E4C580'
      },
    },
  },
  plugins: [],
});