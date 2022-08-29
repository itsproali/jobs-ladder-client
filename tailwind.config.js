/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        loginBg: "url('/src/asset/blue-bg.jpg')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3b82f6",

          secondary: "#4f46e5",

          neutral: "#242A55",

          "text-main-color": "#333333",

          "text-secondary-color": "#555555",

          "base-100": "#FFFFFF",

          "bottom-footer": "#411361",

          "main-footer": "#4D0C7A",

          contact: "#952DDE",

          border: "#ed3ab26b",

          error: "#fc0303",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
