/** @type {import('tailwindcss').Config} */
import { url } from 'inspector'
import {herobg} from './public/assets/index.js'
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}', // adjust depending on your structure
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['var(--font-poppins)', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  