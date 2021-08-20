module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
      },
      fontSize: {
        'tiny': '.5rem'
      },
      height: {
        '160': '40rem',
        '68': '34rem',
        '112': '28rem',
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
        '260': '65rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
