import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#059669',
          'green-dark': '#047857',
          'green-deep': '#064e3b',
          'green-soft': '#ecfdf5',
          'green-mint': '#d1fae5',
          dark: '#0f172a',
          ink: '#0f172a',
          slate: '#334155',
          gray: '#64748b',
          'gray-soft': '#f8fafc',
          'gray-line': '#e2e8f0',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        prose: '68ch',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.06)',
        'card-lg': '0 4px 12px rgba(15,23,42,0.06), 0 24px 48px rgba(15,23,42,0.08)',
        glow: '0 20px 60px -20px rgba(5,150,105,0.45)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(60% 50% at 50% 0%, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0) 70%)',
        'brand-gradient':
          'linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
