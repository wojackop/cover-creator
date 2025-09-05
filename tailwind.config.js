// tailwind.config.js
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Anek: ['Anek Latin', 'sans-serif'],
        Nunito: ['Nunito', 'sans-serif']
      }
    }
  },
  plugins: []
}