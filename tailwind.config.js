export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'scholz-text': '#0a0a0a',
        'scholz-muted': '#71717a',
        'scholz-line': '#e4e4e7',
      },
      animation: {
        blink: 'blink 1.1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}