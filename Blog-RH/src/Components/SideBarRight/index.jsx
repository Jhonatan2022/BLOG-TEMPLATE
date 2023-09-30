import { themeDark } from "../../Utils/themeDark";

function SideBarRight({ darkMode }) {
  return (
    <div className="nav-left"
      style={themeDark('CONTAINER_CARD', darkMode)}
    >
      <nav>
        <div className="carousel"></div>
      </nav>
    </div>
  );
}

export { SideBarRight };
