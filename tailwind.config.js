const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['./src/components/**/*.js', './pages/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Tienne', ...defaultTheme.fontFamily.serif],
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        primary: {
          DEFAULT: '#FFDA47'
        },
        secondary: {
          DEFAULT: '#98C383'
        },
        tertiary: {
          DEFAULT: '#C2A665'
        },
        accent: {
          DEFAULT: '#33b4eb'
        },
        ssanyujoy: {
          100: '#ffee5b',
          200: '#ffda47',
          300: '#ffc633',
          400: '#ffb21f',
          500: '#F59E0B',
          600: '#e18a00',
          700: '#cd7600',
          800: '#b96200',
          900: '#a54e00'
        },
        ssanyulove: {
          100: '#c0ebab',
          200: '#acd797',
          300: '#98c383',
          400: '#84AF6F',
          500: '#709b5b',
          600: '#5c8747',
          700: '#487333',
          800: '#345f1f',
          900: '#204b0b'
        },
        ssanyuwork: {
          100: '#fee2a1',
          200: '#eace8d',
          300: '#d6ba79',
          400: '#c2a665',
          500: '#ae9251',
          600: '#9A7E3D',
          700: '#866a29',
          800: '#725615',
          900: '#5e4201'
        },
        ssanyuskin: {
          100: '#bc9a79',
          200: '#a88665',
          300: '#947251',
          400: '#805e3d',
          500: '#6c4a29',
          600: '#583615',
          700: '#442201',
          800: '#300e00',
          900: '#1c0000'
        },
        ssanyugray: {
          100: '#ebf3f9',
          200: '#d7dfe5',
          300: '#C3CBD1',
          400: '#afb7bd',
          500: '#9ba3a9',
          600: '#878f95',
          700: '#737b81',
          800: '#5f676d',
          900: '#4b5359'
        },
        ssanyublack: {
          100: '#b1b9ba',
          200: '#9da5a6',
          300: '#899192',
          400: '#757d7e',
          500: '#61696a',
          600: '#4d5556',
          700: '#394142',
          800: '#252d2e',
          900: '#11191a'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
