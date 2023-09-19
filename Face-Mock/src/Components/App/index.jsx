import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../NavBar";
import { Home } from "../Home";

function App() {
  return <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>;
}

export { App };
