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
    //var nota = document.getElementById("nota").value;
    var participante;

    if(document.getElementById("masculino").checked) {
        sexoSelecionado = "masculino";
    }
    else {
        sexoSelecionado = "feminino";
    } //verificar depois se algo foi de fato selecionado
    
    var p = { //criar nome melhor depois
        nome : document.getElementById("nome").value,
        sobrenome : document.getElementById("sobrenome").value,
        email : document.getElementById("email").value,
        idade : document.getElementById("idade").value,
        nota : document.getElementById("nota").value,
        sexo : sexoSelecionado
    }

    participante = sistema.adicionarParticipante(p.nome, p.sobrenome, p.email, p.idade, p.sexo, p.nota);
    alert("participabte " + participante);

    if(localStorage.getItem("participantes") === null) { //se n tiver nada, salva o primeiro
        alert("to no if");

        var arrayCadastro = [participante];
        localStorage.setItem("participantes", JSON.stringify(arrayCadastro));
    }
    else {
        var participantesCadastro = JSON.parse(localStorage.getItem("participantes"));
        //var tamanho = Object.keys(participantesCadastro).length;

        //verificar se ja existe email cadastrado depois e n add em caso positivo
        
        alert("to no else");
        participantesCadastro.push(participante);
        localStorage.setItem("participantes", JSON.stringify(participantesCadastro));

    }
});