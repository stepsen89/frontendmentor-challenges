module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: { sans: "Rubik, sans-serif" },
      colors: {
        "desaturated-blue": "hsl(235, 45%, 61%)",
        "soft-red": "hsl(15, 100%, 70%)",
        "very-dark-blue": "hsl(226, 43%, 10%)",
        "dark-blue": "hsl(235, 46%, 20%)",
        "soft-blue": "hsl(195, 74%, 62%)",
        "lime-green": "hsl(145, 58%, 55%)",
        "soft-orange": "hsl(43, 84%, 65%)",
        "light-red": "hsl(348, 100%, 68%)",
        violet: "hsl(264, 64%, 52%)",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
