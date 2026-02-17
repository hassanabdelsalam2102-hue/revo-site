/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#090f1e",   // darkest base
          deep: "#0a1220",
          soft: "#101725",
        },

        surface: {
          DEFAULT: "#131c2c",
          elevated: "#151b2b",
          subtle: "#172030",
        },

        primary: {
          900: "#0c1323",
          800: "#141a2c",
          700: "#161c2f",
          600: "#1d223a",
          500: "#373c62", // muted purple-blue
        },

        accent: {
          DEFAULT: "#6f9ec6", // light blue highlight
        },

        cta: {
          from: "#7C5CFF", // vibrant purple
          to: "#3EE0C6",   // bright cyan
        },
        
        flare: {
          center: "#7C5CFF", // vibrant purple
          mid: "#6f9ec6",    // light blue highlight
          edge: "#090f1e",   // bright cyan
        },

        bubble: {
          primary: "#7C5CFF",
          secondary: "#3EE0C6",
          accent: "#5B8CFF",
          soft: "#9B6BFF",
        },
      },

      backgroundImage: {
        "gradient-cta": "linear-gradient(to right, #7C5CFF, #3EE0C6)",
        "gradient-background": "linear-gradient(135deg, #090f1e 100%, #101725 40%)",
        "gradient-flare": "radial-gradient(circle at top left, #7C5CFF -130%, #090f1e 40%, #090f1e 0%)",
        "gradient-flare-1": "radial-gradient(circle at bottom right, #7C5CFF -130%, #090f1e 40%, #090f1e 0%)",


      },

      boxShadow: {
        glow: "0 0 40px rgba(111, 158, 198, 0.25)",
      },

      borderColor: {
        subtle: "#1d223a",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "Apple Color Emoji", "Segoe UI Emoji"],
      },
    },
  },
  plugins: [],
}
