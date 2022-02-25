module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Grange", "sans-serif"],
      body: ["Aileron-regular", "sans-serif"],
      "body-bold": ["Aileron-bold", "sans-serif"],
      "body-heavy": ["Aileron-heavy", "sans-serif"],
      "body-italic": ["Aileron-italic", "sans-serif"],
      "body-light": ["Aileron-light", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
