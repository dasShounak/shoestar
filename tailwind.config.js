module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: ["Aileron-regular", "sans-serif"],
      "body-bold": ["Aileron-bold", "sans-serif"],
      "body-heavy": ["Aileron-heavy", "sans-serif"],
      "body-italic": ["Aileron-italic", "sans-serif"],
      "body-light": ["Aileron-light", "sans-serif"],
      display: ["Grange", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
