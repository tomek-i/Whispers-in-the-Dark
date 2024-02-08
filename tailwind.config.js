/* eslint-disable @typescript-eslint/no-var-requires */
const { pick, omit } = require("lodash")
const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        "blur-in": "filter",
        "blur-out": "filter",
        "fade-in": "opacity, filter",
        lightning: "opacity",
        "fade-out": "opacity, filter",
      },
      keyframes: {
        lightning: {
          "0%": { opacity: 0 },
          "5%": { opacity: 0.33 },
          "21%": { opacity: 1 },
          "30%": { opacity: 0.1 },
          "38%": { opacity: 0.76 },
          "41%": { opacity: 0 },
          "62%": { opacity: 0.43 },
          "69%": { opacity: 0.23 },
          "84%": { opacity: 0.13 },
          "100%": { opacity: 0 },
        },
        "blur-in": {
          "0%": { filter: "blur(0)" },
          "100%": { filter: "blur(5px)" },
        },
        "blur-out": {
          "100%": { filter: "blur(5px)" },
          "0%": { filter: "blur(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "100%": { opacity: "1" },
          "0%": { opacity: "0" },
        },
      },
      animation: {
        "blur-in": "blur-in 4s ease-in",
        "blur-out": "blur-out 4s ease-out",
        "fade-in": "fade-in 4s ease-in",
        "fade-out": "fade-out 4s ease-out",
        lightning: "lightning 1s ",
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      fontFamily: {
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      minHeight: {
        ...defaultTheme.height,
      },
      minWidth: {
        ...defaultTheme.width,
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
