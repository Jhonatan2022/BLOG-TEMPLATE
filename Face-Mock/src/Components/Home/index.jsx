import { Card } from "../Card";
import { SideBarLeft } from "../SideBarLeft";
import { SideBarRight } from "../SideBarRight";
import "./styles.css";

function Home() {
  return (
    <main className="main-container">
      <SideBarLeft />
      <Card />
      <SideBarRight />
    </main>
  );
}

export { Home };
