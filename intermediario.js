var sistema = new SistemaCadastro();

var sexoSelecionado;
var editor = false;


window.onload = function() { //ao carregar a pagina chama essa função
    carregaDadosLocalStorageNaTabela();
};

function carregaDadosLocalStorageNaTabela() {
    var sexoParticipante;
    var situacaoParticipante;
    sistema.obterParticipantes().forEach(function(participantes, index){

        if(participantes.sexo === 1){
            sexoParticipante = 'Masculino';
        }
        else{
            sexoParticipante = 'Feminino';
        }

        if(participantes.aprovado === true){
            situacaoParticipante = 'Sim';
        }
        else{
            situacaoParticipante = 'Não';
        }

        document.getElementById("tabela").innerHTML += '<td>'+ participantes.nome +' '+ participantes.sobrenome+ '</td><td>' + participantes.idade + '</td><td>' + sexoParticipante + '</td><td>' + participantes.nota + '</td><td>' + situacaoParticipante + '</td><td>' + '<a href="javascript:void(0)" onclick="editarDados(\'' + participantes.email + '\')">Editar</a>' + ' ' + '<a href="javascript:void(0)" onclick="excluirDados(\'' + participantes.email + '\')">Excluir</a>' + '</td></tr>'
	});

}

//console.log(editor);

function editarDados(email) { 
    editor = true;

    var participante = sistema.obterParticipante(email);
    var form = document.querySelector("#formulario");

    form.nome.value = participante.nome;
    form.sobrenome.value = participante.sobrenome;
    form.email.value = participante.email;
    form.idade.value = participante.idade;    
    form.nota.value = participante.nota;
    form.sexo.value = participante.sexo;
    var sistema = new SistemaCadastro();

    var sexoSelecionado;
    var editor = false;
    
    
    window.onload = function() { //ao carregar a pagina chama essa função
        carregarDadosNaTabela();
    };
    
    function carregarDadosNaTabela() {
        var sexoParticipante;
        var situacaoParticipante;
        sistema.obterParticipantes().forEach(function(participantes){
    
            if(participantes.sexo === 1){
                sexoParticipante = 'Masculino';
            }
            else{
                sexoParticipante = 'Feminino';
            }
    
            if(participantes.aprovado === true){
                situacaoParticipante = 'Sim';
            }
            else{
                situacaoParticipante = 'Não';
            }
    
            document.getElementById("tabela").innerHTML += '<tr><td>'+participantes.id+'</td><td>'+ participantes.nome +' '+ participantes.sobrenome+ '</td><td>' + participantes.idade + '</td><td>' + sexoParticipante + '</td><td>' + participantes.nota + '</td><td>' + situacaoParticipante + '</td><td>' + '<a href="javascript:void(0)" onclick="editarDados(\'' + participantes.email + '\')">Editar</a>' + ' ' + '<a href="javascript:void(0)" onclick="excluirDados(\'' + participantes.email + '\')">Excluir</a>' + '</td></tr>'
        });
    
    }
    
    function editarDados(email) {
        editor = true;
    
        var participante = sistema.obterParticipante(email);
        var form = document.querySelector("#formulario");
    
        form.nome.value = participante.nome;
        form.sobrenome.value = participante.sobrenome;
        form.email.value = participante.email;
        form.idade.value = participante.idade;    
        form.nota.value = participante.nota;
        form.sexo.value = participante.sexo;
    
        form.email.disabled = true;
    
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
    
        if(editor === false){
    
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
    
            editor = true;
        }
    
        else{
            sistema.atualizarParticipante( 
                document.getElementById("nome").value,
                document.getElementById("sobrenome").value, 
                document.getElementById("email").value,
                document.getElementById("idade").value,
                sexoSelecionado,
                document.getElementById("nota").value)
    
            window.location.reload(true);
    
            editor = false;
        }
    });
    form.email.disabled = true;

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

    if(editor === false){

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

        editor = true;
    }

    else{
        sistema.atualizarParticipante( 
            document.getElementById("nome").value,
            document.getElementById("sobrenome").value, 
            document.getElementById("email").value,
            document.getElementById("idade").value,
            sexoSelecionado,
            document.getElementById("nota").value)

        window.location.reload(true);

        editor = false;
    }
});