function ArmazenamentoLocal(key){

    if(localStorage.getItem(key) === null)
        localStorage.setItem(key,"[]");
    
    function adicionarLocal(item){

        var participantes = desfragmentar();

        participantes.push(item);

        fragmentar(participantes);
    }

    function desfragmentar(){
        var itemF = localStorage.getItem(key);
        return JSON.parse(itemF);
    }

    function fragmentar(participantes){
        var itemF = JSON.stringify(participantes);
        localStorage.setItem(key, itemF);
    }

    function removerLocal(propriedade, valor){
        var itens = desfragmentar();
        var index = itens.findIndex((elemento) => {
            return elemento[propriedade] === valor;
        });
        itens.splice(index, 1);
        fragmentar(itens);
    }

    function atualizar(item, propriedade) {
 
        var itens = desfragmentar();
        
        var index = itens.findIndex((elemento) => {
            return elemento[propriedade] === item[propriedade]
        });
        
        itens[index] = item;
        
        fragmentar(itens);
    }

    function obterItem(propriedade, valor) {
        var itens = desfragmentar();
        return itens.find((elemento) => {
             return elemento[propriedade] === valor; }
            );
    }

    function obterItens(propriedade, valor) {
        var itens = desfragmentar();
        return itens.find((elemento) => { 
            return elemento[propriedade] === valor; 
        })
    }

    function obterTodosOsItens(){
        return desfragmentar();
    }

    return {
        adicionarLocal,
        desfragmentar,
        fragmentar,
        removerLocal,
        atualizar,
        obterItem,
        obterItens,
        obterTodosOsItens
    };

}