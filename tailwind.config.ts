import { fontFamily } from "tailwindcss/defaultTheme";
import TailwindcssAnimate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        xs: "360px",
      },
    },
    extend: {
      colors: {
        blue: {
          100: "#B4C6EE",
          400: "#417BFF",
          500: "#3371FF",
        },
        red: {
          400: "#DD4F56",
          500: "#DC4349",
        },
        dark: {
          100: "#09111F",
          200: "#0B1527",
          300: "#0F1C34",
          350: "#12213B",
          400: "#27344D",
          500: "#2E3D5B",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      backgroundImage: {
        doc: "url(/assets/images/doc.png)",
        modal: "url(/assets/images/modal.png)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [TailwindcssAnimate],
};

export default config;
