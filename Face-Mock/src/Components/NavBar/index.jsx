import { NavLink } from "react-router-dom";
import "./styles.css";

function NavBar() {
  return (
    <header>
      <nav className="nabvar">
        <div className="nabvar-left">
          <figure className="logo">
            <img
              src="https://talento.colsof.co/static/media/LOGO_SONAR_2.1981e9bb6be7ae85aee7.png"
              alt="logo"
            />
          </figure>
          <input type="text" placeholder="Search" />
        </div>

        <div className="nabvar-right">
          {routes.map((route) => (
            <NavLink
              style={({ isActive }) => ({
                borderBottom: isActive && "2px solid black",
              })}
              key={route.to}
              to={route.to}
            >
              {route.label}
            </NavLink>
          ))}
          <button>Dark Mode</button>
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
