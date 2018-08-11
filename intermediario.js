var sistema = new SistemaCadastro();

var sexoSelecionado;


window.onload = function() { //ao carregar a pagina chama essa função
    carregaDadosLocalStorageNaTabela();
};

function carregaDadosLocalStorageNaTabela() {
    sistema.obterParticipantes().forEach(function(participantes, index){
        document.getElementById("tabela").innerHTML += '<td>'+ participantes.nome +' '+ participantes.sobrenome+ '</td><td>' + participantes.idade + '</td><td>' + participantes.sexo + '</td><td>' + participantes.nota + '</td><td>' + participantes.aprovado + '</td><td>' + '<a href="javascript:void(0)" onclick="editarDados(\'' + participantes.email + '\')">Editar</a>' + ' ' + '<a href="javascript:void(0)" onclick="excluirDados(\'' + participantes.email + '\')">Excluir</a>' + '</td></tr>'
	});

}

function editarDados(email) { 
    
}

function excluirDados(email) {
    sistema.removerParticipante(email);
    window.location.reload(true);
    alert("Registro excluído!");

}

var salvarParticipante = document.getElementById("btnCadastro").addEventListener("click",function (){

    if(document.getElementById("masculino").checked) {
        sexoSelecionado = 1;
    }
    else {
        sexoSelecionado = 2;
    } //verifica qual sexo foi selecionado

    try {
    sistema.adicionarParticipante(
    document.getElementById("nome").value,
    document.getElementById("sobrenome").value, 
    document.getElementById("email").value,
    document.getElementById("idade").value,
    sexoSelecionado);

    } catch(Error){
        window.alert(Error.message);}
        
    sistema.adicionarNotaAoParticipante(
    document.getElementById("email").value,
    document.getElementById("nota").value);
    window.location.reload(true);

});