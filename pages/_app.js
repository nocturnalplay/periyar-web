import '../styles/globals.scss'
import Menu from "../components/menu/index"
function MyApp({ Component, pageProps }) {
  return (
    <div className="periyar-research-home">
      <Menu />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
