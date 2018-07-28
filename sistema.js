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

    var emailExistente = -1;

        for(var i = 0; i < participantes.length; i++){
             if(participantes[i].email === email){
                emailExistente = i;
            }
        }

        if(emailExistente === -1){
            var p = new Participante();

            p.nome = nome;
            p.sobrenome = sobrenome;
            p.email = email;
            p.idade = idade;
            p.sexo = sexo;

            participantes.push(p);    
        }  

        else{
            throw new Participante();
        }

    }

    function removerParticipante(email) {

        for(var i = 0; i < participantes.length; i++){
            if(participantes[i].email === email){
                participantes.splice(i,1);
            }
        }
    }
    
    function buscarParticipantesPorNome(nome){

        var alunos = [] ; 

         for(var i = 0; i < participantes.length; i++){
            if(participantes[i].nome === nome){
                alunos.push(participantes[i]);
                 }
             }
        return alunos;
    }   

    function buscarParticipantesPorSexo(sexo){

        var alunos = [] ; 

        for(var i = 0; i < participantes.length; i++){
             if(participantes[i].sexo === sexo){
                alunos.push(participantes[i]);
            }
        }
        return alunos;
    }

    function buscarParticipantesAprovados(){

        var apro = [] ;

        for(var i = 0; i < participantes.length; i++){
            if(participantes[i].aprovado === true){
                apro.push(participantes[i]);
            }
        }
        return apro;
    }

    function buscarParticipantesReprovados(){

        var repro = [] ;

        for(var i = 0; i < participantes.length; i++){
            if(participantes[i].aprovado === false){
                repro.push(participantes[i]);
            }
        }
        return repro;
    }

    function obterParticipante(email){

        for(var i = 0; i < participantes.length; i++){
            if(participantes[i].email === email){
                return participantes[i];
            }
        }
    }

    function adicionarNotaAoParticipante(email, nota){

        for(var i = 0; i < participantes.length; i++){
            if(participantes[i].email === email){
                participantes[i].nota = nota;
                if(participantes[i].nota >= 70){
                    participantes[i].aprovado = true;
                }
                else
                    participantes[i].aprovado = false;
            }
        }

    }

    function obterMediaDasNotasDosParticipantes(){

        var soma = 0;

        for(var i = 0; i < participantes.length; i++){
            soma = soma + participantes[i].nota;
        }
        return soma/participantes.length;
    }

    function obterTotalDeParticipantes(){
        return participantes.length;
    }

    function verificarSeParticipanteEstaAprovado(email){

        for(var i = 0; i < participantes.length; i++){
            if(participantes[i].email === email){
                return participantes[i].aprovado;
            }
        }
    }

    function obterQuantidadeDeParticipantesPorSexo(sexo){

        var contadorSexoMasculino = 0;

        var contadorSexoFeminino = 0;

        if (sexo === 1){
            for(var i = 0; i < participantes.length; i++){
                if(participantes[i].sexo === 1){
                    contadorSexoMasculino = contadorSexoMasculino + 1;
                }
            }
        return contadorSexoMasculino;
        }

        else if(sexo === 2){
            for(var i = 0; i < participantes.length; i++){
                if(participantes[i].sexo === 2){
                    contadorSexoFeminino = contadorSexoFeminino + 1;
                }
            }
        return contadorSexoFeminino;
        }
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