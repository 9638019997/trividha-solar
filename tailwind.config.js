/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#f5c542',
          deep: '#ffb703',
          ink: '#08101d',
          panel: '#0f172a',
          green: '#22c55e',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(245, 197, 66, 0.22), 0 20px 45px rgba(245, 197, 66, 0.12)',
      },
      backgroundImage: {
        'sun-grid': 'radial-gradient(circle at top, rgba(245,197,66,0.16), transparent 35%), linear-gradient(135deg, rgba(15,23,42,1), rgba(8,16,29,1))',
      },
    },
  },
  plugins: [],
};
