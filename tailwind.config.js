/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'min-phone': '500px',
        phone: { max: "500px" },
        toosmall : "333px",
      },
    },
  },
  plugins: [],
};
