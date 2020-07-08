import { AnimatePresence } from "framer-motion"
import "react-lazy-load-image-component/src/effects/blur.css"
import "../../next-seo.config"
import "../styles/main.scss"

export default function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}
