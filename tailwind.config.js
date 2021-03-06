module.exports = {
  theme: {
    extend: {
      colors: {
        midnightblue: '#0a0440',
        airbytepurple: '#9579fd',
        grouparooblue: '#29abe2',
        dbtorange: '#ff6949',
        snowflakeblue: '#32b8ea'
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

