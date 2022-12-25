import Title from "./title";
import Header from "./header"
import Submenu from "./submenu";
// import ResearchPortal from "./research_portal"
import Top from "./top"

export default function Menu() {
  return (
    <div className="periyar-menu">
      <Title />
      <Header />
      {/* <Submenu /> */}
      {/* <ResearchPortal /> */}
      <Top />
    </div >
  );
}
