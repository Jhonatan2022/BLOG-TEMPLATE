import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ContextApp } from "../../Context";
import { SunIcon, MoonIcon } from "../Icons";
import { LazyLoadingImg } from '../../Utils/LazyLoading';
import "./styles.css";

const borderBottom = "2px solid white";

function NavBar() {
  const { searchData, setSearchData, setDarkMode, darkMode } =
    useContext(ContextApp);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedDarkMode = localStorage.getItem("darkMode");
    setDarkMode(savedDarkMode === null ? prefersDarkMode : savedDarkMode === "true");
  }, [setDarkMode]);

  const handleInputChange = (e) => {
    setSearchData(e.target.value);
  };

  const handleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    // Guardar el valor en localStorage para recordarlo
    localStorage.setItem("darkMode", newDarkMode.toString());
  };

  return (
    <header>
      <nav className="nabvar">
        <div className="nabvar-left">
          <figure className="logo">
            <NavLink to="/">
              <LazyLoadingImg
                src="https://raw.githubusercontent.com/Jhonatan2022/BLOG-TEMPLATE/main/Blog-RH/Assets/logo.png"
                alt="Colsoft"
                title="Colsoft"
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
              <span className="icon-mod">
                <MoonIcon />{" "}
              </span>
            ) : (
              <span className="icon-mod">
                <SunIcon />{" "}
              </span>
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
