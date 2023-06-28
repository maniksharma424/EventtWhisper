/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body:['PT+Sans'],
        calendar:['Nunito']
      },
      backgroundImage: {
        'profile-page': "url('https://cutewallpaper.org/21/svg-background-image/Wave-Background-With-SVG-CodeSeekco.png')",

      }
    },
    
  },
  plugins: [],
}