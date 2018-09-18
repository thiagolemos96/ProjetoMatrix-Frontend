import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MostrarDadosNaTela from "./componentes/app";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<MostrarDadosNaTela />, document.getElementById("root"));
registerServiceWorker();
