import { AnimatePresence } from "framer-motion"
import "../../next-seo.config"
import "../styles/main.scss"

export default function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}
