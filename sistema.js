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

        var i = participantes.findIndex(function(email){

            return email.email === email;
        })

	participantes.splice(i,1);
    }
    
    function buscarParticipantesPorNome(nome){

        var alunos = participantes.filter(function(nomesDosAlunos){

            return nomesDosAlunos.nome === nome;
        });

        return alunos;
    }   

    function buscarParticipantesPorSexo(sexo){

        var alunos = participantes.filter(function(sexoDosAlunos){

            return sexoDosAlunos.sexo === sexo;
        });

        return alunos;
    }

    function buscarParticipantesAprovados(){

        var alunos = participantes.filter(function(aprovados){

             return aprovados.aprovado === true;
        });

        return alunos;
    }

    function buscarParticipantesReprovados(){

        var alunos = participantes.filter(function(reprovados){

            return reprovados.nota == false;
        });

        return alunos;
    }

    function obterParticipante(email){

        var mail =  participantes.find(function(object){

            return object.email === email;
        });

            return mail;
    }

    function adicionarNotaAoParticipante(email, nota){

        var i = participantes.findIndex(function(achar){

            return achar.email === email;
        });

        participantes[i].nota = nota;

        participantes[i].aprovado = participantes[i].nota >= 70;
    }

    function obterMediaDasNotasDosParticipantes(){

        var count = participantes.reduce(function(acumulador, valor){

            return acumulador + valor.nota;
        },0);

        return count/participantes.length;
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