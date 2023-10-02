import { themeDark } from "../../Utils/themeDark";
import "./styles.css";

function SideBarLeft({ darkMode }) {
  return (
    <div className="nav-left" style={themeDark("CONTAINER_CARD", darkMode)}>
      <nav>
        <div
          className="carousel-header-container"
          style={themeDark("CONTAINER_CARD", darkMode)}
        >
          <h2
            className="carousel-header"
            style={themeDark("CARD_TEXT", darkMode)}
          >
            Nuestros beneficios
          </h2>
        </div>
        <div className="carousel">
          {routes.map((route) => (
            <div
              className={darkMode ? "carousel-item-dark" : "carousel-item"}
              style={themeDark("CARD_LEFT", darkMode)}
              key={route.id}
            >
              <a href={`#${route.to}`}>{route.label}</a>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}

const routes = [];
routes.push({ id: 1, to: "Banco", label: "Banco" });
routes.push({ id: 2, to: "Cuenta", label: "Cuenta" });
routes.push({ id: 3, to: "Tarjeta", label: "Tarjeta" });
routes.push({ id: 4, to: "Prestamo", label: "Préstamo" });
routes.push({ id: 7, to: "Fondos", label: "Fondos" });
routes.push({ id: 8, to: "Credito", label: "Crédito" });

// export { SideBarLeft };
export default SideBarLeft;
