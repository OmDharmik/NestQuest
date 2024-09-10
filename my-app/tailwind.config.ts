import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '960px',
      lg: '1024px',
    },
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      colors: {
        primaryBackground: '#F5F5F5',
        accentLight: '#48CFCB',
        accentDark: '#229799',
        primaryText: '#424242',
      },
      fontSize: {
        sm: ['1rem', { lineHeight: '1.25rem' }],
        md: ['2.5rem', { lineHeight: '2.75rem' }],
        lg: ['5rem', { lineHeight: '5.25rem' }],
      },
    },
  },
};

export default config;
