module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      secondary: "#1c2541",
      danger: "#e3342f",
      primary: "#2e51a2",
      second: "#e1e7f5",
    }),
    extend: {
      textColor: {
        primaryBlue: "#1d439b",
        active: "#e1e7f5",
      },

      gridTemplateColumns: {
        primary: "1fr 4fr 1fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
