import { NavLink } from "react-router-dom";
import "./styles.css";

const borderBottom = "2px solid white";

function NavBar() {
  return (
    <header>
      <nav className="nabvar">
        <div className="nabvar-left">
          <figure className="logo">
            <NavLink to="/">
            <img
              src="https://talento.colsof.co/static/media/LOGO_SONAR_2.1981e9bb6be7ae85aee7.png"
              alt="logo"
            />
            </NavLink>
          </figure>
          <input type="text" placeholder="Search" />
        </div>

        <div className="nabvar-right">
          {routes.map((route) => (
            <NavLink
              style={({ isActive }) => ({
                borderBottom: isActive && borderBottom,
              })}
              key={route.to}
              to={route.to}
            >
              {route.label}
            </NavLink>
          ))}
          <button></button>
        </div>
      </nav>
    </header>
  );
}

const routes = [];
routes.push({ to: "/", label: "Home" });
routes.push({ to: "/about", label: "About" });
routes.push({ to: "/contact", label: "Contact" });

export { NavBar };
