/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
      'platinum': '#e6e8e6', //bg-color
      'platinum-20' : '#3f403f33',
      'platinum-80' : '#3f403fcc',
      'platinum-30' : '#3f403fad',
      'timberwolf': '#ced0ce',
      'ashgray': '#9fb8ad',
      'felidgrau': '#475841 ',
      'onyx': '#3f403f ',  //text-color
     },
     backgroundColor: {
      'soft-gray': '#E6E8E6',
      'light-sage': '#9FB8AD',
      'dark-charcoal': '#3F403F',
    },
    },
  },
  plugins: [
  ],
}
