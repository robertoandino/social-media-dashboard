module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)'},
          '50%': { opacity: '1', transform: 'scale(1.2)'},
        },
        jumpToFeed: {
          '0%' : { transform: 'translateY(0) scale(1)', opacity: 1},
          '50%' : { transform: 'translateY(-50px) scale(1.1)', opacity: 0.7 },
          '100%' : { transform: 'translateY(200px) scale(1)', opacity: 0},
        },
      },
      animation: {
        pulse: 'glow 1.5s infinite ease-in-out',
        jumpToFeed: 'jump-to-feed 1s ease-in-out',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};

