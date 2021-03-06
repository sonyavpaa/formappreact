// import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import ReactDOMClient from "react-dom/client";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(<App />);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
