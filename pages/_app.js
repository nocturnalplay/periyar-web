import "../styles/globals.scss";
import Menu from "../components/menu/index";
import Submenu from "../components/menu/submenu";
function MyApp({ Component, pageProps }) {
  return (
    <div className="periyar-research-home">
      <Menu />
      <Submenu />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
