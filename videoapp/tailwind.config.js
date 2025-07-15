// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  darkMode: 'class',
  theme: {
    extend: {
         colors: {
        Seasalt: '#FAFAFA',
        Darkred:"#92090E",
        Richblack:"#15161E",
        Smokyblack:"#120B07",
        Paledogwood:"#DCC7C3",
        Raisinblack:"#2A2C3C",
        Whitesmoke:"F5F5F5"
      },
    },
  },
  plugins: [
  require('tailwind-scrollbar'),
  require('@tailwindcss/aspect-ratio')
  ],
}