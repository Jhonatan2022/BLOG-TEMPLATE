import { useContext } from "react";
import { Card } from "../Card";
import { SideBarLeft } from "../SideBarLeft";
import { SideBarRight } from "../SideBarRight";
import { ContextApp } from "../../Context";
import { themeDark } from "../../Utils/themeDark";
import "./styles.css";

function Home() {
  const { darkMode } = useContext(ContextApp);

  return (
    <>
      <main className="main-container" 
          style={themeDark('MAIN_CONTAINER', darkMode)}
          >
        <SideBarLeft darkMode={darkMode} />
        <Card darkMode={darkMode} />
        <SideBarRight darkMode={darkMode} />
      </main>
    </>
  );
}

export { Home };
