import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextApp } from "../../Context";
import { SunIcon, MoonIcon } from "../Icons";
import "./styles.css";

const borderBottom = "2px solid white";

function NavBar() {
  const { searchData, setSearchData, setDarkMode, darkMode } =
    useContext(ContextApp);

  const handleInputChange = (e) => {
    setSearchData(e.target.value);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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
        </div>

        <div className="nabvar-right">
          <input
            type="text"
            className="search"
            placeholder="Buscar Publicación..."
            value={searchData}
            onChange={handleInputChange}
          />
          <button
            type="button"
            className="btn-dark-mode"
            onClick={handleDarkMode}
            aria-label="Dark Mode"
          >
            {darkMode ? (
              <span className="icon-mod"><MoonIcon /> </span>
            ) : ( <span className="icon-mod"><SunIcon /> </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

const routes = [];
routes.push({ to: "/", label: "Inicio" });
// routes.push({ to: "/about", label: "About" });
// routes.push({ to: "/contact", label: "Contact" });

export { NavBar };
