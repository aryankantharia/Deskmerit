export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Chillax", "Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#047B72",
          hover: "#046962",
          pressed: "#03544E",
          bright: "#069A8E",
          light: "#ECFCFA",
          disabled: "#9FE1DC",
        },
        secondary: {
          DEFAULT: "#EF6503",
          hover: "#FA7C37",
          light: "#FEE9DA",
        },
        ai: {
          DEFAULT: "#047B72",
          hover: "#069A8E",
          light: "#ECFCFA",
        },
        accent: {
          DEFAULT: "#C98272",
          light: "#FAF1EF",
        },
        neutral: {
          50: "#FAFBFC",
          100: "#F4F6F8",
          200: "#E7EBF0",
          300: "#D5DBE2",
          400: "#B5BEC9",
          500: "#8A95A3",
          600: "#687483",
          700: "#4B5563",
          800: "#303946",
          900: "#17202A",
        },
        success: { DEFAULT: "#15803D", light: "#DCFCE7", border: "#BBF7D0" },
        warning: { DEFAULT: "#B45309", light: "#FEF3C7", border: "#FDE68A" },
        error: { DEFAULT: "#DC2626", light: "#FEE2E2", border: "#FECACA" },
        info: { DEFAULT: "#0284C7", light: "#E0F2FE", border: "#BAE6FD" },
      },
      fontSize: {
        display: ["48px", { lineHeight: "56px", fontWeight: "700" }],
        h1: ["32px", { lineHeight: "40px", fontWeight: "700" }],
        h2: ["24px", { lineHeight: "32px", fontWeight: "600" }],
        h3: ["20px", { lineHeight: "28px", fontWeight: "600" }],
        h4: ["18px", { lineHeight: "26px", fontWeight: "500" }],
        body1: ["16px", { lineHeight: "24px" }],
        body2: ["14px", { lineHeight: "20px" }],
        caption: ["12px", { lineHeight: "16px" }],
      },
    },
  },
};
