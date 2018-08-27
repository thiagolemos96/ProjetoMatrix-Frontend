//Objeto Participante
function Participante() {
    this.nome = "";
    this.sobrenome = "";
    this.email = "";
    this.idade = 0;
    this.sexo = 0;
    this.nota = 0;
    this.aprovado = false;
}

/***********************
 * Representa o sistema
 * Uma vez instanciado, deve-se usar essa mesma
 * instancia em todas as operações.
 */

function SistemaCadastro() {

    //Onde os participantes ficarão armazenados
    var armazenamento = new ArmazenamentoHttp();

    function adicionarParticipante(nome, sobrenome, email, idade, sexo, nota) {

        if(obterParticipante(email) === undefined){

            var p = new Participante();

            p.nome = nome;
            p.sobrenome = sobrenome;
            p.email = email;
            p.idade = idade;
            p.sexo = sexo;
            p.nota = nota;

            armazenamento.adicionar(p);

        }  

        else{

            throw new Error("O e-mail " + email + " já está cadastrado");
        }

    }
    

    function removerParticipante(email) {

        armazenamento.remover("email", email);

    }

    function atualizarParticipante(nome, sobrenome, email, idade, sexo, nota){

		var participante = obterParticipante(email);
       
        participante = {nome,sobrenome,email,idade,sexo};
        
        processarNotaDoParticipante(participante, nota);

        armazenamento.atualizar(participante);
        
    }
    
    function buscarParticipantesPorNome(nome){

        return armazenamento.obterItens("nome", nome);
    }    

    function buscarParticipantesPorSexo(sexo){

        return armazenamento.obterItens("sexo", sexo);        
    }

    function buscarParticipantesAprovados(){
        
        return armazenamento.obterItens("aprovado", true);
    }

    function buscarParticipantesReprovados(){

        return armazenamento.obterItens("aprovado", false);

    }
    function obterParticipante(email){
							   //id
		// return armazenamento.obterItem("id", id);  
        return armazenamento.obterItem("email", email);    

    }

    function obterParticipantes(){

        return armazenamento.obterTodosOsItens();

    }

    function processarNotaDoParticipante(participante, nota){
		participante.nota = nota;
		participante.aprovado = nota >= 70;
	}

    function adicionarNotaAoParticipante(email, nota){

        var participante = armazenamento.obterItem("email",email);
        processarNotaDoParticipante(participante, nota);
        armazenamento.atualizar(participante, "email");

    }

    function obterMediaDasNotasDosParticipantes(){
        var participantes = armazenamento.obterTodosOsItens();

        var soma = participantes.reduce(function(acumulador, valor){
            
            return acumulador + valor.nota;

        },0);

        return soma/participantes.length;
    }

    function obterTotalDeParticipantes(){

        armazenamento.obterTodosOsItens().length;

    }

    function verificarSeParticipanteEstaAprovado(email){

      var participante = obterParticipante(email);

      if(participante){
          
          return participante.aprovado;

      }

    }

    function obterQuantidadeDeParticipantesPorSexo(sexo){
       
        var quantidadeSexo = buscarParticipantesPorSexo(sexo);
        return quantidadeSexo.length;
     
    }

    return {
        adicionarParticipante,
        removerParticipante,
        atualizarParticipante,
        buscarParticipantesPorNome,
        buscarParticipantesPorSexo,
        buscarParticipantesAprovados,
        buscarParticipantesReprovados,
        obterParticipante,
        obterParticipantes,
        processarNotaDoParticipante,
        adicionarNotaAoParticipante,
        obterMediaDasNotasDosParticipantes,
        obterTotalDeParticipantes,
        verificarSeParticipanteEstaAprovado,
        obterQuantidadeDeParticipantesPorSexo    
    };


}