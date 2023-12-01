/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: "#89BAED",
          2: "#A1C3E7",
          3: "#CEDFEB",
          4: "#EEF5F9",
        },
        purple: {
          DEFAULT: "#ADA2E5",
          2: "#D0CAEF",
          3: "#DFDCF1",
          900: "#786DB0",
        },
        peach: {
          DEFAULT: "#F1A394",
          2: "#F4BBBA",
          3: "#ECD4D3",
        },
        gray: {
          DEFAULT: "#363B4B",
          2: "#787878",
          3: "#999",
        },
        yellow: {
          DEFAULT: "#F9DDBE",
          3: "#FAE2C1",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      boxShadow: {
        soft: "0px 0px 7px -5px rgba(0,0,0,0.75)",
        strong: "0px 0px 8px -5px rgba(0,0,0,1)",
        navbar: "0px 2px 50px 0px rgba(0, 0, 0, 0.15)",
        error: "0px 2px 30px 0px #ECD4D3",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
        scale: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.2)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scale-up": "scale .9s linear infinite alternate",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
