/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rasphera: {
          orange: '#FF7417',
          'orange-hover': '#E65D00',
          peach: '#FFB58A',
          'peach-light': '#FFE8DC',
          cream: '#FFF8EF',
          'cream-dark': '#F4EADA',
          brown: '#38251C',
          'brown-light': '#5A3D30',
          dark: '#171412',
          sand: '#F7EFE3',
        }
      },
      fontFamily: {
        display: ['Anton', 'Bebas Neue', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        hand: ['Caveat', 'Kalam', 'cursive'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'solid': '4px 4px 0px #171412',
        'solid-lg': '8px 8px 0px #171412',
        'solid-xl': '12px 12px 0px #171412',
        'solid-orange': '6px 6px 0px #FF7417',
        'solid-peach': '6px 6px 0px #FFB58A',
        'wood': '0 10px 25px -5px rgba(56, 37, 28, 0.15), 0 8px 10px -6px rgba(56, 37, 28, 0.1)',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}
