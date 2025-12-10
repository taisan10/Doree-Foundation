module.exports = {
  theme: {
    extend: {
      keyframes: {
        tilt: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(90deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        tilt: "tilt 3s ease-in-out infinite",
      },
    },
  },
};
