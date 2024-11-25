module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)'},
          '50%': { opacity: '1', transform: 'scale(1.2)'},
        },
      },
      animation: {
        pulse: 'glow 1.5s infinite ease-in-out',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};

