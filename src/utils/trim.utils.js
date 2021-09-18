export const trimString = (string, length) => {
  return string.length > length ? string.substring(0, length) + "..." : string
}

export const reverse = (s) => {
  return s.split("").join("")
}
