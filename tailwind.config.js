module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)'},
          '50%': { opacity: '1', transform: 'scale(1.2)'},
        },
        'jump-to-feed': {
          '0%' : { transform: 'translate(0, 0) scale(1)', opacity: 1},
          '50%' : { transform: 'translate(-20px, -50px) scale(1.1)', opacity: 0.7 },
          '100%' : { transform: 'translate(-50px, 200px) scale(1)', opacity: 0},
        },
      },
      animation: {
        pulse: 'glow 1.5s infinite ease-in-out',
        'jump-to-feed': 'jump-to-feed 1s ease-in-out',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};

