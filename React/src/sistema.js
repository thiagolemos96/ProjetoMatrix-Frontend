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


            var p = new Participante();

            p.nome = nome;
            p.sobrenome = sobrenome;
            p.email = email;
            p.idade = idade;
            p.sexo = sexo;
            p.nota = nota;
            p.aprovado = nota >= 70;

            return armazenamento.adicionar(p);

    }
    

    function removerParticipante(id) {

        return armazenamento.remover(id);

    }

    function atualizarParticipante(id, nome, sobrenome, email, idade, sexo, nota){

        return obterParticipante(id)
            .then(function(participante){
                participante.nome = nome;
                participante.sobrenome = sobrenome;
                participante.idade = idade;
                participante.sexo = sexo;
                participante.nota = nota;
                participante.aprovado = participante.nota >= 70;

                return armazenamento.atualizar(participante);
            });
        
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
    function obterParticipante(id){ 
        return armazenamento.obterItem(id);    

    }

    function obterParticipantes(){
        return armazenamento.obterTodosOsItens();
        
    }

    function obterMediaDasNotasDosParticipantes(){
        var participantes = armazenamento.obterTodosOsItens();

        var soma = participantes.reduce(function(acumulador, valor){
            
            return acumulador + valor.nota;

        },0);

        return soma/participantes.length;
    }

    function obterTotalDeParticipantes(){

        return armazenamento.obterTodosOsItens().length;

    }

    function verificarSeParticipanteEstaAprovado(id){

      var participante = obterParticipante(id);

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
        obterMediaDasNotasDosParticipantes,
        obterTotalDeParticipantes,
        verificarSeParticipanteEstaAprovado,
        obterQuantidadeDeParticipantesPorSexo    
    };


}