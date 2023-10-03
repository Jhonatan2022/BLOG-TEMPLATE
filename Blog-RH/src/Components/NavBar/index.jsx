import { lazy, Suspense } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextApp } from "../../Context";
import Icons from "../Icons";
import { themeDark } from "../../Utils/themeDark";
import useDarkMode from "../../Hook/useDarkMode";
import "./styles.css";
const LazyLoadingImg = lazy(() => import("../../Utils/LazyLoadingImg"));

const borderBottom = "2px solid white";

function NavBar({ darkMode, setDarkMode }) {
  const { searchData, setSearchData } = useContext(ContextApp);
  const { MoonIcon, SunIcon } = Icons();

  useDarkMode();

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
      <nav className="nabvar" style={themeDark("NAVBAR", darkMode)}>
        <div className="nabvar-left">
          <figure className="logo-container">
            <NavLink to="/">
              <Suspense fallback={<div className="loader"></div>}>
                <LazyLoadingImg
                  style={themeDark("LOGO", darkMode)}
                  className={darkMode ? "logo-dark" : "logo"}
                  src="https://raw.githubusercontent.com/Jhonatan2022/BLOG-TEMPLATE/main/Blog-RH/Assets/logo.png"
                  alt="Colsoft"
                  title="Colsoft"
                />
              </Suspense>
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
            style={themeDark("BORDER_LABEL", darkMode)}
            type="text"
            className={darkMode ? "search-dark" : "search"}
            placeholder="Buscar Publicación..."
            value={searchData}
            onChange={handleInputChange}
            aria-label="Buscar Publicación"
          />
          <button
            style={themeDark("BUTTON", darkMode)}
            type="button"
            className="btn-dark-mode"
            onClick={handleDarkMode}
            aria-label="Dark Mode"
          >
            {darkMode ? (
              <span className="icon-mod">
                <SunIcon />
              </span>
            ) : (
              <span className="icon-mod">
                <MoonIcon />
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

// export { NavBar };
export default NavBar;
