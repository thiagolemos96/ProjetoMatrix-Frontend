import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1>Controle de Participantes - Projeto Matrix 3</h1>
        </nav>
      </div>
    );
  }
}

class Butao extends Component {
  render() {
    return (
      <div class="form-group row">
        <div class="col-sm-10">
          <button type="button" class="btn btn-danger" id="btnCadastro">
            Cadastrar
          </button>
        </div>
      </div>
    );
  }
}

class MeuForm extends Component {
  render() {
    return (
      <div>
        <form id="formulario">
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
          <div class="form-group row col-md-5">
            <label for="sobrenome" class="col-sm-2 col-form-label">
              Sobrenome:
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="sobrenome"
                required
                placeholder="Ex:Lemos"
              />
            </div>
          </div>
          <div class="form-group row col-md-5">
            <label for="email" class="col-sm-2 col-form-label">
              Email:
            </label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="email"
                required
                placeholder="email@exemplo.com.br"
              />
            </div>
          </div>
          <div class="form-group row col-md-5">
            <label for="idade" class="col-sm-2 col-form-label">
              Idade:
            </label>
            <div class="col-sm-10">
              <input
                type="number"
                class="form-control"
                id="idade"
                required
                placeholder="Ex:22"
              />
            </div>
          </div>
          <div class="form-group row col-md-5">
            <label for="nota" class="col-sm-2 col-form-label">
              Nota:
            </label>
            <div class="col-sm-10">
              <input
                type="number"
                class="form-control"
                id="nota"
                required
                placeholder="Ex:80"
              />
            </div>
          </div>
          <fieldset class="form-group">
            <div class="row col-md-5">
              <legend class="col-form-label col-sm-2 pt-0">Sexo:</legend>
              <div class="col-sm-10">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="masculino"
                    value="1"
                    checked
                  />
                  <label class="form-check-label" for="masculino">
                    Masculino
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="feminino"
                    value="2"
                  />
                  <label class="form-check-label" for="feminino">
                    Feminino
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default class MostrarDadosNaTabela extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <MeuForm />
        <Butao />
      </div>
    );
  }
}
