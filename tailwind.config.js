module.exports = {
  theme: {
    extend: {
      colors: {
        midnightblue: '#0a0440',
        airbytepurple: '#9579fd',
        grouparooblue: '#29abe2',
        dbtcolor: '#ff3f18'
      }
    }, 
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    } 
  },
  plugins: [
  require("tailwindcss"),
  require("autoprefixer"),
  require("@tailwindcss/aspect-ratio")
  ],
};

