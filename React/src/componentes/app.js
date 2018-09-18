import React, { Component } from "react";
import axios from "axios";

class MeuForm extends Component {
  state = { participantes: [], editor: false };

  participante = {
    nome: null,
    sobrenome: null,
    email: null,
    idade: null,
    sexo: null,
    nota: null,
    aprovado: null
  };

  buscarDados(id) {
    return axios
      .get("http://matrix.avalie.net/api/participantes/" + id)
      .then(response => {
        return response.data;
      });
  }

  editarDados(objeto) {
    axios
      .put("http://matrix.avalie.net/api/participantes/" + objeto.id, objeto)
      .then(response => {
        alert("Participante Editado!!");
        window.location.reload(true);
        return response.data;
      });
  }

  atualizarParticipantes(id) {
    this.buscarDados(id).then(objeto => {
      this.state.editor = true;
      this.participante = objeto;
      document.getElementById("nome").value = objeto.nome;
      document.getElementById("sobrenome").value = objeto.sobrenome;
      document.getElementById("email").value = objeto.email;
      document.getElementById("email").disabled = true;
      document.getElementById("idade").value = objeto.idade;
      document.getElementById("nota").value = objeto.nota;
      objeto.sexo === 1
        ? (document.getElementById("masculino").checked = true)
        : (document.getElementById("feminino").checked = true);
    });
  }

  adicionarDados(objeto) {
    axios
      .post("http://matrix.avalie.net/api/participantes/", objeto)
      .then(response => {
        alert("Participante Cadastrado!!");
        return response.data;
      })
      .catch(error => {
        throw error.response.data.message;
      });
    window.location.reload(true);
  }

  excluirDados(id) {
    axios
      .delete("http://matrix.avalie.net/api/participantes/" + id)
      .then(response => {
        alert("Participante Excluido!!");
        window.location.reload(true);
        return response.data;
      });
  }

  setNome(event) {
    this.participante.nome = event.target.value;
  }

  setSobrenome(event) {
    this.participante.sobrenome = event.target.value;
  }

  setEmail(event) {
    this.participante.email = event.target.value;
  }

  setIdade(event) {
    this.participante.idade = event.target.value;
  }

  setNota(event) {
    this.participante.nota = event.target.value;
    this.participante.aprovado = event.target.value >= 70;
  }

  setSexo(event) {
    this.participante.sexo = event.target.value;
  }

  componentDidMount() {
    axios.get("http://matrix.avalie.net/api/participantes/").then(response => {
      const participantes = response.data;
      this.setState({ participantes });
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.editor) {
      this.editarDados(this.participante);
    } else {
      this.adicionarDados(this.participante);
    }
  };

  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1>Controle de Participantes - Projeto Matrix 3</h1>
          </nav>
        </div>
        <br />
        <form id="formulario" onSubmit={this.handleSubmit}>
          <div className="form-group row col-md-5">
            <label htmlFor="nome" className="col-sm-2 col-form-label">
              Nome:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                ref="nome"
                id="nome"
                required
                placeholder="Ex: Thiago"
                value={this.state.nome}
                onChange={event => {
                  this.setNome(event);
                }}
              />
            </div>
          </div>
          <div className="form-group row col-md-5">
            <label htmlFor="sobrenome" className="col-sm-2 col-form-label">
              Sobrenome:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                ref="sobrenome"
                id="sobrenome"
                required
                placeholder="Ex:Lemos"
                value={this.state.sobrenome}
                onChange={event => {
                  this.setSobrenome(event);
                }}
              />
            </div>
          </div>
          <div className="form-group row col-md-5">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email:
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                ref="email"
                id="email"
                required
                placeholder="email@exemplo.com.br"
                value={this.state.email}
                onChange={event => {
                  this.setEmail(event);
                }}
              />
            </div>
          </div>
          <div className="form-group row col-md-5">
            <label htmlFor="idade" className="col-sm-2 col-form-label">
              Idade:
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                ref="idade"
                id="idade"
                required
                placeholder="Ex:22"
                value={this.state.idade}
                onChange={event => {
                  this.setIdade(event);
                }}
              />
            </div>
          </div>
          <div className="form-group row col-md-5">
            <label htmlFor="nota" className="col-sm-2 col-form-label">
              Nota:
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                ref="nota"
                id="nota"
                required
                placeholder="Ex:80"
                value={this.state.nota}
                onChange={event => {
                  this.setNota(event);
                }}
              />
            </div>
          </div>
          <fieldset className="form-group">
            <div className="row col-md-5">
              <legend className="col-form-label col-sm-2 pt-0">Sexo:</legend>
              <div className="col-sm-10">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    ref="masculino"
                    id="masculino"
                    value="1"
                    onInput={event => {
                      this.setSexo(event);
                    }}
                  />
                  <label className="form-check-label" htmlFor="masculino">
                    Masculino
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    ref="feminino"
                    id="feminino"
                    value="2"
                    onInput={event => {
                      this.setSexo(event);
                    }}
                  />
                  <label className="form-check-label" htmlFor="feminino">
                    Feminino
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="form-group row">
            <div className="col-sm-10">
              <button type="sumbit" className="btn btn-danger" id="btnCadastro">
                Cadastrar
              </button>
            </div>
          </div>
        </form>
        <table className="table">
          <thead className="bg-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome Completo</th>
              <th scope="col">Idade</th>
              <th scope="col">Sexo</th>
              <th scope="col">Nota</th>
              <th scope="col">Aprovado</th>
              <th scope="col"> </th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody id="tabela">
            {this.state.participantes.map(objeto => {
              var sexoSelecionado =
                objeto.sexo === 1 ? "Masculino" : "Feminino";
              var situacaoParticipantes = objeto.aprovado ? "Sim" : "Não";
              return (
                <tr>
                  <td>{objeto.id}</td>
                  <td>
                    {objeto.nome} {objeto.sobrenome}
                  </td>
                  <td>{objeto.idade}</td>
                  <td>{sexoSelecionado}</td>
                  <td>{objeto.nota}</td>
                  <td>{situacaoParticipantes}</td>
                  <td>
                    <a
                      href="javascript:void(0)"
                      onClick={event => {
                        this.atualizarParticipantes(objeto.id);
                      }}
                    >
                      Editar
                    </a>
                  </td>
                  <td>
                    <a
                      href="javascript:void(0)"
                      onClick={event => {
                        this.excluirDados(objeto.id);
                      }}
                    >
                      Excluir
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default class MostrarDadosNaTela extends Component {
  render() {
    return (
      <div className="root">
        <MeuForm />
      </div>
    );
  }
}
