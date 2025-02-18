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
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FFD700", // Gold
          secondary: "#000000", // Black
          accent: "#FFA500", // Orange
          neutral: "#F5F5F5", // White Smoke
          "base-100": "#FFFFFF", // White
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      {
        dark: {
          primary: "#FFD700", // Gold
          secondary: "#FFFFFF", // White
          accent: "#FFA500", // Orange
          neutral: "#1F2937", // Dark Gray
          "base-100": "#000000", // Black
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      {
        bumblebee: {
          primary: "#E0A82E",
          secondary: "#F9D72F",
          accent: "#181830",
          neutral: "#181830",
          "base-100": "#FAF7F5",
          info: "#E0A82E",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      {
        luxury: {
          primary: "#F3CC30",
          secondary: "#E5E5E5",
          accent: "#A5A5A5",
          neutral: "#000000",
          "base-100": "#FFFFFF",
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#DF7E07",
          error: "#FA5C5C",
        },
      },
      {
        cyberpunk: {
          primary: "#FF7598",
          secondary: "#75D1F0",
          accent: "#C07EEC",
          neutral: "#423F00",
          "base-100": "#FFEE00",
          info: "#00FFFF",
          success: "#00FF00",
          warning: "#FFAA00",
          error: "#FF0000",
        },
      },
    ], // Enable both light and dark themes
  },
};
