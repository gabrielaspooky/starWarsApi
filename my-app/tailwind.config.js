module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      starwars: ["Star Wars", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'background': "url('/img/background.jpg')",
       
      }

    },
  },
  plugins: [],
}


