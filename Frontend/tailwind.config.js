// // tailwind.config.js
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"], // apne project ke paths
//   theme: {
//     extend: {
//       keyframes: {
//         tilt: {
//           "0%": { transform: "rotate(0deg)" },
//           "50%": { transform: "rotate(90deg)" },
//           "100%": { transform: "rotate(0deg)" },
//         },
//       },
//       animation: {
//         tilt: "tilt 3s ease-in-out infinite",
//       },
//     },
//   },
//   plugins: [],
// };



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        move: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "40px 0" },
        },
      },
      animation: {
        move: "move 2s linear infinite",
        spin: "spin 10m linear infinite",

      },
      backgroundSize: {
        dash: "40px 100%",
      },
    },
  },
  plugins: [],
};
