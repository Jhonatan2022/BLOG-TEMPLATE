// import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./Components/App";
import { Container } from "./Components/Container";
import { ContextProvider } from "./Context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <Container>
      {/* // <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </Container>
  </ContextProvider>
);
