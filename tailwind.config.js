/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'hud-bg': {
          primary: '#070A0F',
          secondary: '#05070C',
        },
        'hud-panel': 'rgba(255, 255, 255, 0.05)',
        'hud-line': {
          primary: 'rgba(120, 180, 255, 0.25)',
          secondary: 'rgba(255, 255, 255, 0.12)',
        },
        'hud-glow': {
          cyan: '#2DE2FF',
          teal: '#34F5C5',
        },
        'hud-warning': '#FFB020',
        'hud-critical': '#FF3B3B',
        'hud-text': {
          primary: '#EAF0FF',
          muted: '#9AA7C7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'hud': '4px',
        'hud-sm': '2px',
        'hud-lg': '8px',
      },
      backdropBlur: {
        'hud': '10px',
      },
      boxShadow: {
        'hud-glow': '0 0 20px rgba(45, 226, 255, 0.3)',
        'hud-glow-teal': '0 0 20px rgba(52, 245, 197, 0.3)',
        'hud-glow-red': '0 0 20px rgba(255, 59, 59, 0.3)',
      },
      animation: {
        'scan-sweep': 'scan-sweep 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'scan-sweep': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
