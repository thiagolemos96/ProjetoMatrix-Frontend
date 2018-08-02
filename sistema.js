//Objeto Participante
function Participante() {
    this.nome = "";
    this.sobrenome = "";
    this.email = "";
    this.idade = 0
    this.sexo = 0
    this.nota = 0
    this.aprovado = false
}

/***********************
 * Representa o sistema
 * Uma vez instanciado, deve-se usar essa mesma
 * instancia em todas as operações.
 */
function SistemaCadastro() {

    //Onde os participantes ficarão armazenados
    var participantes = [];

    function adicionarParticipante(nome, sobrenome, email, idade, sexo) {

        if(obterParticipante(email) === undefined){

            var p = new Participante();

            p.nome = nome;
            p.sobrenome = sobrenome;
            p.email = email;
            p.idade = idade;
            p.sexo = sexo;

            participantes.push(p);    
        }  

        else{

            throw new error("O e-mail" + email + "já está cadastrado");
        }

    }

    function removerParticipante(email) {

        var indexEmail = participantes.findIndex(function(posicao){
            return posicao.email === email;
        })

        participantes.splice(indexEmail,1);
    }
    
    function buscarParticipantesPorNome(nome){

        var buscaNome = participantes.filter(function(nomesDosAlunos){
            return nomesDosAlunos.nome === nome;
        });

        return buscaNome;
    }   

    function buscarParticipantesPorSexo(sexo){

        var buscaSexo = participantes.filter(function(sexoDosAlunos){

            return sexoDosAlunos.sexo === sexo;
        });

        return buscaSexo;
    }

    function buscarParticipantesAprovados(){

        var buscaAprovados = participantes.filter(function(aprovados){
             return aprovados.aprovado === true;
            });

            return buscaAprovados;
    }

    function buscarParticipantesReprovados(){

        var buscaReprovados = participantes.filter(function(reprovados){

            return reprovados.nota == false;
            });

            return buscaReprovados;
    }

    function obterParticipante(email){

        var pessoa =  participantes.find(function(object){
            return object.email === email;
        });

            return pessoa;
    }

    function adicionarNotaAoParticipante(email, nota){

        var indexParticipante = participantes.findIndex(function(adicionar){
            return adicionar.email === email;
        });

        participantes[indexParticipante].nota = nota;
        participantes[indexParticipante].aprovado = participantes[indexParticipante].nota >= 70;
    }

    function obterMediaDasNotasDosParticipantes(){

        var soma = participantes.reduce(function(acumulador, valor){
            
            return acumulador + valor.nota;
        },0);

        return soma/participantes.length;
    }

    function obterTotalDeParticipantes(){

        return participantes.length;
    }

    function verificarSeParticipanteEstaAprovado(email){

        return obterParticipante(email).aprovado;
    }

    function obterQuantidadeDeParticipantesPorSexo(sexo){
       
        return buscarParticipantesPorSexo(sexo).length;
     
    }

    return {
        adicionarParticipante,
        removerParticipante,
        buscarParticipantesPorNome,
        buscarParticipantesPorSexo,
        buscarParticipantesAprovados,
        buscarParticipantesReprovados,
        obterParticipante,
        adicionarNotaAoParticipante,
        obterMediaDasNotasDosParticipantes,
        obterTotalDeParticipantes,
        verificarSeParticipanteEstaAprovado,
        obterQuantidadeDeParticipantesPorSexo    
    };


}