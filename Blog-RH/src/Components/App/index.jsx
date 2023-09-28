import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../NavBar";
import { Home } from "../Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Not Found 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
