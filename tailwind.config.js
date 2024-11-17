/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transform: {
        "my-style": {translate: "-50%, -50%"}
      }
    },
  },
  plugins: [],
}

