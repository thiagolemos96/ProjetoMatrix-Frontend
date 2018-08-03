var sistema = SistemaCadastro();

function Participante() {
    this.nome = "";
    this.sobrenome = "";
    this.email = "";
    this.idade = 0
    this.sexo = 0
    this.nota = 0
    this.aprovado = false
}

var salvarParticipante = document.getElementById("btnCadastro").addEventListener("click", function(e){
    var sexoSelecionado;
    var nota = document.getElementById("nota").value;

    if(document.getElementById("masculino").checked){
        sexoSelecionado = "masculino";
    }
    else {
        sexoSelecionado = "feminino";
    } //verificar depois se algo foi de fato selecionado
    
    var p = {
        nome : document.getElementById("nome").value,
        sobrenome : document.getElementById("sobrenome").value,
        email : document.getElementById("email").value,
        idade : document.getElementById("idade").value,
        nota : document.getElementById("nota").value,
        sexo : sexoSelecionado
    }
    var participante = sistema.adicionarParticipante(p.nome, p.sobrenome, p.email, p.idade, p.sexo, p.nota);

    localStorage.setItem(1, JSON.stringify(participante));
});
