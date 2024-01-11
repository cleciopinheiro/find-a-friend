/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tall': { 'raw': '(max-height: 720px)' },
      'tall2': {'min': '900px', 'max': '1450px'},
      'teste': { 'raw': '(max-width: 1025px)' },
      'teste2': { 'raw': '(max-width: 800px)' },
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'max-sm': { 'max': '640px' },
      'max-md': { 'max': '768px' },
      'max-lg': { 'max': '1024px' },
      'max-xl': { 'max': '1280px' },
      'max-2xl': { 'max': '1536px' },
    },
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },
      animation: {
        'teste': '0.4s ease-in-out 0s 1 normal forwards running leftToRight',
        'teste2': '0.4s ease-in-out 0s 1 normal forwards running RightToLeft',
        'teste3': '0.4s ease-in-out 0s 1 normal forwards running exitModal',
        'cancelModal': '0.4s ease-in-out 0s 1 normal forwards running exitCancelModal',
      },
      keyframes: {
        leftToRight: {
          '0%': { transform: 'translateX(200px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        exitModal: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        exitCancelModal: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(1000px)' },
        },
        RightToLeft: {
          '0%': { transform: 'translateX(-200px)' },
          '100%': { transform: 'translateX(0px)' },
        }
      }
    },
  },
  plugins: [],
}

