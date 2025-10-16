// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          500: '#FFD700',
          600: '#FFA500',
        },
      },
      boxShadow: {
        gold: '0 0 20px rgba(255, 215, 0, 0.3)',
        'gold-strong': '0 0 30px rgba(255, 215, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
