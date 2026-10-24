/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Martel Sans'", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["'Martel Sans'", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        human: ["Lora", "Georgia", "serif"],
      },
      colors: {
        midnight: {
          DEFAULT: "#0F1730",
          50: "#F2F4F8",
          100: "#E5E9F1",
          800: "#172348",
          900: "#0F1730",
        },
        ember: {
          DEFAULT: "#FF5A36",
          hover: "#E94A27",
          deep: "#C2361A",
          tint: "#FFE6DF",
          subtle: "#FFF1ED",
        },
        paper: {
          DEFAULT: "#F7F4EE",
          dark: "#EDE9E0",
          card: "#FFFFFF",
        },
        dusk: {
          DEFAULT: "#24305A",
          dark: "#1B2446",
          light: "#334173",
        },
        slate: {
          DEFAULT: "#4A5370",
          muted: "#6B7594",
          light: "#8F97B0",
        },
        mist: {
          DEFAULT: "#E6E2D8",
          dark: "#D6D1C5",
          light: "#F0ECE3",
        },
        live: {
          mint: "#12B886",
          amber: "#F5A524",
          iris: "#5B6CFF",
          fog: "#9AA1B2",
          rose: "#E5484D",
        },
        // Backwards compatibility with generic tokens
        primary: {
          DEFAULT: "#FF5A36",
          hover: "#E94A27",
          pressed: "#C2361A",
          bright: "#FF5A36",
          light: "#FFE6DF",
          disabled: "#FFA994",
        },
        secondary: {
          DEFAULT: "#0F1730",
          hover: "#24305A",
          light: "#F7F4EE",
        },
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(15, 23, 48, 0.04)',
        'card': '0 4px 20px rgba(15, 23, 48, 0.06)',
        'elevated': '0 12px 36px rgba(15, 23, 48, 0.09)',
        'glow-ember': '0 0 24px rgba(255, 90, 54, 0.25)',
      },
      borderRadius: {
        'button': '12px',
        'card': '20px',
        'widget': '18px',
      },
      animation: {
        'pulse-gentle': 'pulseGentle 1.6s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        pulseGentle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.22)', opacity: '0.8' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
