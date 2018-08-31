var sistema = new SistemaCadastro();

var sexoSelecionado;
var editor = false;
var idParticipante = -1;


window.onload = function() { //ao carregar a pagina chama essa função
    carregarDadosNaTabela();
};

function carregarDadosNaTabela(){
    var sexoParticipante;
    var situacaoParticipante;

    sistema.obterParticipantes()
        .then(objeto =>{
            objeto.forEach(function(participantes){
                participantes.sexo === 1 ? sexoParticipante = 'Masculino' : sexoParticipante = 'Feminino';
                
                participantes.aprovado === true ? situacaoParticipante = 'Sim' : situacaoParticipante = 'Não';
            
                document.getElementById("tabela").innerHTML += '<tr><td>'+participantes.id+'</td><td>'+ participantes.nome +' '+ participantes.sobrenome+ '</td><td>' + participantes.idade + '</td><td>' + sexoParticipante + '</td><td>' + participantes.nota + '</td><td>' + situacaoParticipante + '</td><td>' + '<a href="javascript:void(0)" onclick="editarDados(\'' + participantes.id + '\')">Editar</a>' + ' ' + '<a href="javascript:void(0)" onclick="excluirDados(\'' + participantes.id + '\')">Excluir</a>' + '</td></tr>'
                
            })
        })
}
    
function editarDados(id) {
    editor = true;
    idParticipante = id;
    sistema.obterParticipante(id)
        .then(function (participante){ document.getElementById("nome").value = participante.nome;
                              document.getElementById("sobrenome").value = participante.sobrenome;
                              document.getElementById("email").value = participante.email;
                              document.getElementById("email").disabled = true;
                              document.getElementById("idade").value = participante.idade;
                              document.getElementById("nota").value = participante.nota;
                              participante.sexo === 1 ? document.getElementById("masculino").checked = true : document.getElementById("feminino").checked = true; ;
                            });

}

function excluirDados(id) {
    sistema.removerParticipante(id)
        .then(participante =>{
            window.location.reload(true);
            alert("Participante excluído!!");
        });
}

var salvarParticipante = document.getElementById("btnCadastro").addEventListener("click",function (){
    document.getElementById("masculino").checked ? sexoSelecionado = 1 : sexoSelecionado = 2;  //verifica qual sexo foi selecionado

    if(editor === false){
        sistema.adicionarParticipante(
            document.getElementById("nome").value,
            document.getElementById("sobrenome").value, 
            document.getElementById("email").value,
            document.getElementById("idade").value,
            sexoSelecionado,
            document.getElementById("nota").value
            )
            .then(item => {
                alert("Participante adicionado!!");
                window.location.reload(true);
            })
            .catch(function(resultado){
                alert("Erro ao adicionar!!!");
                window.location.reload(true);
            })

        editor = true;
    }

    else{
        sistema.atualizarParticipante( 
            idParticipante,
            document.getElementById("nome").value,
            document.getElementById("sobrenome").value, 
            document.getElementById("email").value,
            document.getElementById("idade").value,
            sexoSelecionado,
            document.getElementById("nota").value)
        .then(item => {
            alert("Participante editado!!");
            window.location.reload(true);
        })
        .catch(function(resultado){
            alert("Erro ao editar!!!");
            window.location.reload(true);
        })
        
        editor = false;
    }
});