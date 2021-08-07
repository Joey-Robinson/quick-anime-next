module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#0b132b",
      secondary: "#1c2541",
      danger: "#e3342f",
    }),
    extend: {
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
