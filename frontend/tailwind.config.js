/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require('@tailwindcss/forms'),
],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#070",
        },
      },
    },
  },
};
