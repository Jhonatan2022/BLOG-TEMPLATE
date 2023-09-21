// import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./Components/App";
import { ContextProvider } from "./Context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
      {/* // <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
  </ContextProvider>
);
