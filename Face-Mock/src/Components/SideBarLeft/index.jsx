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
routes.push({ id: 4, to: "Prestamo", label: "Prestamo" });
routes.push({ id: 5, to: "Inversion", label: "Inversion" });
routes.push({ id: 6, to: "Seguro", label: "Seguro" });
routes.push({ id: 7, to: "Fondos", label: "Fondos" });
routes.push({ id: 8, to: "Credito", label: "Credito" });
routes.push({ id: 9, to: "Servicios", label: "Servicios" });
routes.push({ id: 10, to: "Promociones", label: "Promociones" });
routes.push({ id: 11, to: "Ayuda", label: "Ayuda" });
routes.push({ id: 12, to: "Configuracion", label: "Configuracion" });
routes.push({ id: 13, to: "Salir", label: "Salir" });
routes.push({ id: 14, to: "Inicio", label: "Inicio" });

export { SideBarLeft };
