module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./*.vue"
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "soft": "var(--soft)",
        "light": "var(--light)",
        "dark": "var(--dark)",
        "blackish": "var(--blackish)",
        "dark-primary": "var(--dark-primary)",
        "primary-alpha": "var(--primary-alpha)"
      }
    },
  },
  plugins: [],
};