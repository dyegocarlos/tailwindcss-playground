const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: false,
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '9xl': '18rem',
    },
    // spacing: {
    //    sm: '8px',
    //    md: '16px',
    //    lg: '24px',
    //    xl: '48px',
    // },
    colors: {
      primary: {
        "100": "#f7fdf7",
        "200": "#d6f5d6",
        "300": "#adebad",
        "400": "#78dd78",
        "500": "#33cc33",
        "600": "#2fbc2f",
        "700": "#035C9D",
        "800": "#238b23",
        "900": "#1a661a"
      },
      blue: colors.blue,
      green: colors.green,
      secondary: colors.yellow,
      neutral: colors.gray,
      yellow: colors.yellow,
      red: {
        "600": "#E60047",
      },
      // retro-compatibilidade
      gray: colors.gray,
      indigo: colors.indigo,
      white: colors.white,
      transparent: colors.transparent
    },
    fontFamily: {
      'sans': ['Montserrat'],
      'body': ['Montserrat'],
      'montserrat': ['Montserrat']
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat']
      },
      spacing: {}
    }
  },
  corePlugins: {},
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    fontSize: ['responsive', 'hover']
  },
  plugins: [
    // require('@tailwindcss/forms')
  ]
}
