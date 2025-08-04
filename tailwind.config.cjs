// Tailwind Theme Configuration
module.exports = {
  content: ["./src/**/*.{astro,html,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: '#00FFFF',
        accent: '#7CFC00',
        dark: '#0F172A',
        light: '#F1F5F9'
      },
    },
  },
  plugins: [],
};