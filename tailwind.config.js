import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#001D3D", // main color
        secondary: "#000814", // secondary color
        tertiary: "#003566", //tertiary color
        accent: "#ffd60a", // accent color
      },
      fontFamily: {
        serif: ["Ubuntu", "sans-serif"], // set Ubuntu as the default font
      },
    },
  },
  plugins: [daisyui],
};
