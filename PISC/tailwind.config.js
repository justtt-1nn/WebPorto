/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Roboto": ['Roboto'],
        "Space Grotesk": ['Space Grotesk']
      },
      backgroundImage: {
        'hero': "url('./public/assets/images/logo.svg')",
        'pilihjalur': "url('./public/assets/images/bg-pilihJalur.svg')",
      },
      backgroundColor:{
        'blackTransparant': "rgba(255, 255, 255, 0.16)",
        'xp' : "#F3F4F6",
        'xn' : "#D4D4D8",
      },
    },
  },
  plugins: [],
}
