var sistema = SistemaCadastro();

window.onload = function() { //ao carregar a pagina chama essa função
    carregaDadosLocalStorageNaTabela();
};

function carregaDadosLocalStorageNaTabela() {
    var dados = JSON.parse(localStorage.getItem("participantes"));

    if(dados != null) {

        for (var i = 0; i < dados.length; i++) { 
            var tr = document.createElement("tr");
            tr.appendChild(novaTd(dados[i].nome));
            tr.appendChild(novaTd(dados[i].idade));
            tr.appendChild(novaTd(dados[i].sexo));
            tr.appendChild(novaTd(dados[i].nota));
            tr.appendChild(novaTd(dados[i].aprovado));
            tr.appendChild(novaTd("EDITAR", true));
            tr.appendChild(novaTd("EXCLUIR", true));

            document.getElementById("tabela").appendChild(tr);
        }
    }
}

function novaTd(conteudo, temLink) {
    var td = document.createElement("td");

    if (typeof(temLink) === "undefined") {
        td.innerHTML = conteudo;
    }
    else {
        if (conteudo === 'EDITAR')
            td.innerHTML = '<a href="#" onclick=\"editarDados()\">' + conteudo + '</a>'; 
        else
            td.innerHTML = '<a href="#" onclick="excluirDados()">' + conteudo + '</a>';
    }
    return td;
}

function editarDados() { 
    
}

function excluirDados(email) {
    sistema.removerParticipante(email);
    alert("Registro excluído.");

}

var salvarParticipanteNoLocalStorage = document.getElementById("btnCadastro").addEventListener("click", function(){
    var sexoSelecionado;

    var participante;

    if(document.getElementById("masculino").checked) {
        sexoSelecionado = 1;
    }
    else {
        sexoSelecionado = 2;
    } //verificar depois se algo foi de fato selecionado
    
    participante = sistema.adicionarParticipante(document.getElementById("nome").value,
    document.getElementById("sobrenome").value, 
    document.getElementById("email").value,
    document.getElementById("idade").value,
    sexoSelecionado);
    sistema.adicionarNotaAoParticipante(document.getElementById("email").value,
    document.getElementById("nota").value);

    if(localStorage.getItem("participantes") === null) { //se n tiver nada, salva o primeiro
        var arrayCadastro = [participante];
        localStorage.setItem("participantes", JSON.stringify(arrayCadastro));
    }
    else {
        var participantesCadastro = JSON.parse(localStorage.getItem("participantes"));
        //verificar se ja existe email cadastrado depois e n add em caso positivo
        
        participantesCadastro.push(participante);
        localStorage.setItem("participantes", JSON.stringify(participantesCadastro));

    }
    alert("Registro Adicionado");
});