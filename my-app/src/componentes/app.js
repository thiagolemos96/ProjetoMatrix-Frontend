import React, { Component } from "react";
import axios from "axios";

/*function Participante() {
  (this.nome = ""),
    (this.sobrenome = ""),
    (this.email = ""),
    (this.idade = 0),
    (this.sexo = 0),
    (this.nota = 0),
    (this.aprovado = false);
}

function adicionarParticipante(nome, sobrenome, email, idade, sexo, nota) {
  var p = new Participante();

  p.nome = nome;
  p.sobrenome = sobrenome;
  p.email = email;
  p.idade = idade;
  p.sexo = sexo;
  p.nota = nota;
  p.aprovado = nota >= 70;

  console.log(p);
  return p;
}*/

class MeuForm extends Component {
  constructor() {
    super(); //chama o construtor do Component
    this.state = { participantes: [] }; //inicialmente lista esta com o state vazio
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  editarDados(id) {
    console.log("edit", id);
  }

  excluirDados(id) {}

  setNome(event) {
    this.setState({ nome: event.target.value });
  }

  setSobrenome(event) {
    this.setState({ sobrenome: event.target.value });
  }

  setEmail(event) {
    this.setState({ email: event.target.value });
  }

  setIdade(event) {
    this.setState({ idade: event.target.value });
  }

  setNota(event) {
    this.setState({ nota: event.target.value });
    this.setState({ aprovado: event.target.value >= 70 });
  }

  setSexo(event) {
    this.setState({ sexo: event.target.value });
  }

  componentDidMount() {
    axios.get("http://matrix.avalie.net/api/participantes/").then(response => {
      const participantes = response.data;
      console.log(participantes);
      this.setState({ participantes });
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const participantes = {
      nome: this.state.nome,
      sobrenome: this.state.sobrenome,
      email: this.state.email,
      idade: this.state.idade,
      nota: this.state.nota,
      aprovado: this.state.nota >= 70,
      sexo: this.state.sexo
    };

    axios
      .post("http://matrix.avalie.net/api/participantes/", participantes)
      .then(response => {
        console.log(response.data);
        alert("Participante Cadastrado!!");
        return response.data;
      })
      .catch(error => {
        throw error.response.data.message;
      });
    window.location.reload(true);
  };

  mostrarTabela() {
    return (
      <tbody id="tabela">
        {this.state.participantes.map(objeto => {
          var sexoSelecionado = objeto.sexo === 1 ? "Masculino" : "Feminino";
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
                  onClick={e => {
                    this.editarDados(objeto.id);
                  }}
                >
                  Editar
                </a>
              </td>
              <td>
                <a
                  href="javascript:void(0)"
                  onClick={e => {
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
    );
  }

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
                id="nome"
                required
                placeholder="Ex: Thiago"
                value={this.state.nome}
                onChange={e => {
                  this.setNome(e);
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
                id="sobrenome"
                required
                placeholder="Ex:Lemos"
                value={this.state.sobrenome}
                onChange={e => {
                  this.setSobrenome(e);
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
                id="email"
                required
                placeholder="email@exemplo.com.br"
                value={this.state.email}
                onChange={e => {
                  this.setEmail(e);
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
                id="idade"
                required
                placeholder="Ex:22"
                value={this.state.idade}
                onChange={e => {
                  this.setIdade(e);
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
                id="nota"
                required
                placeholder="Ex:80"
                value={this.state.nota}
                onChange={e => {
                  this.setNota(e);
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
          {this.mostrarTabela()}
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
