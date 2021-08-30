import { useEffect, useState } from "react"

export const fetchUtility = (url) => {
  const [state, setState] = useState({ data: [], loading: true })

  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }))
    fetch(url)
      .then((x) => x.json())
      .then((y) => {
        setState({ data: y, loading: false })
      })
  }, [url, setState])
  // console.log(state)
  return state
}
