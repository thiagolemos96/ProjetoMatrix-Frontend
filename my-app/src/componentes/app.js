import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return;
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <h1>Controle de Participantes - Projeto Matrix 3</h1>
      </nav>
    </div>;
  }
}

class MeuForm extends Component {
  render() {
    <div>
      <form>
        <div class="form-group row col-md-5">
          <label for="nome" class="col-sm-2 col-form-label">
            Nome:
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="nome"
              required
              placeholder="Ex:Thiago"
            />
          </div>
        </div>
      </form>
    </div>;
  }
}

export default class MostrarDadosNaTabela extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Hello World!!</h1>
        <MeuForm />
      </div>
    );
  }
}
