import { useContext, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextApp } from "../../Context";
const NavBar = lazy(() => import("../NavBar"));
const Home = lazy(() => import("../Home"));

function App() {
  const { darkMode, setDarkMode } = useContext(ContextApp);

  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export { App };
