module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'lg2': '1100px',
      'lg3': '1200px',
      'xl': '1280px',
      'xl2': '1350px',
      'xl3': '1450px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        "vert-green": "#71A1A4",
        "vert-blue": "#2F81FF",
        "vert-green-light": "#A3CCC7",
        "vert-green-lighter": "#ECFAFF",
        "vert-green-lightest": "#C7E6E3",
        "vert-green-medium": "#E7F4F3",
        "vert-green-dark": "#346B6E",
        "#002B56": "#002B56",
        "#1B6AE3": "#1B6AE3"
      },
      maxHeight: {
        '90': '90%',
        '92vh': '92vh'
      },
      fontFamily: {
        dmsans: "DM Sans Regular",
        kumbhsans: "Kumbh Sans"
      },
      fontSize: {
        'tiny': '.5rem',
        '4.5xl': ['2.5rem', {
          lineHeight: '1.4',
        }]
      },
      height: {
        '43rem': '43rem',
        '160': '40rem',
        '38rem': '38rem',
        '37rem': '37rem',
        '36rem': '36rem',
        '35rem': '35rem',
        '68': '34rem',
        '33rem': '33rem',
        '32rem': '32rem',
        '30rem': '30rem',
        '112': '28rem',
        '26rem': '26rem',
        '24rem': '24rem',
        '22rem': '22rem',
        '9/10': '90%'
      },
      width: {
        '160': '40rem',
        '64': '32rem',
        '160': '80rem',
        '80vw': '80vw'
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20'
      },
      flex: {
        '2': '2 2 0%'
      },
      transitionProperty: {
        'fontWeight': 'fontWeight',
      },
      spacing: {
        '260': '65rem',
        '7.5': '1.875rem',
        '14.5': '3.75rem'
      },
      inset: {
        '2/5': '40%',
        '-2/5': '-40%'
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
      opacity: ['hover', 'focus']
    },
  },
  plugins: [],
};
