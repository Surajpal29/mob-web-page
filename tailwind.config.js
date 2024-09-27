/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: "rgba(232, 167, 0, 1)",
        customWhite: "rgba(255, 255, 255, 1)",
        customgray: "rgba(42, 40, 58, 1)",
        customtextgray: "rgba(133, 135, 152, 1)",
      },
      backgroundImage: {
        "custom-radial-blue":
          "radial-gradient(400.64% 160.36% at 47.19% 0%, rgba(133, 216, 250, 1) 40%, rgba(25, 25, 52, 1) 100%)",
        "custom-radial":
          "radial-gradient(151.64% 120.36% at 47.19% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
      },
      boxShadow: {
        customshadow: "0px 0px 10.5px 2px rgba(0, 128, 128, 0.41)",
      },
    },
  },
  plugins: [],
};
