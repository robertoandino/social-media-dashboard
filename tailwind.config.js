module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        popUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0'},
          '100%': { transform: 'translateY(0)', opacity: '1'},
        },
      },
      animation: {
        popUp: 'popUp 0.6s ease-out',
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

