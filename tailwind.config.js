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

// #3f403f at 100% opacity: #3f403f
// #3f403f at 90% opacity: #3f403fE6 
// #3f403f at 80% opacity: #3f403fCC 
// #3f403f at 70% opacity: #3f403fB3 
// #3f403f at 60% opacity: #3f403f99 
// #3f403f at 50% opacity: #3f403f80
// #3f403f at 40% opacity: #3f403f66 
// #3f403f at 30% opacity: #3f403f4D 
// #3f403f at 20% opacity: #3f403f33 
// #3f403f at 10% opacity: #3f403f1A 
// #3f403f at 0% opacity (completely transparent): #3f403f00