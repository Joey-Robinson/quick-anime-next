import { useRef } from "react"

export const renderEffect = () => {
  const renders = useRef(0)
  console.log("rendering here", renders.current++)
}
