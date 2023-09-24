import "./styles.css";

function SideBarLeft() {
  return (
    <div className="nav-left">
      <nav>
        <div className="carousel">
          {routes.map((route) => (
            <div className="carousel-card" key={route.id}>
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

export { SideBarLeft };
