import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <nav className="navBar">
        <ul>
          {routes.map((route) => (
            <li key={route.to}>
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
                to={route.to}
              >
                {route.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

const routes = [];
routes.push({ to: "/", label: "Home" });
routes.push({ to: "/about", label: "About" });
routes.push({ to: "/contact", label: "Contact" });

export { NavBar };
