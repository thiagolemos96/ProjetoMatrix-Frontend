import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import MostrarDadosNaTabela from "./intermediarioReact";

ReactDOM.render(<MostrarDadosNaTabela />, document.getElementById("root"));
registerServiceWorker();
