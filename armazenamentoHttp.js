function ArmazenamentoHttp(){

	function adicionar(item){

        var participante = JSON.stringify(item);
        
		$.ajax({
			type: "POST",
			url: 'http://matrix.avalie.net/api/participantes/',
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			data: participante,
            async: false
            
        });	
        
    }	
    
	function remover(propriedade, valor){

        var participante = obterItem(propriedade, valor);
        
		$.ajax({
			type: "DELETE",
			url: 'http://matrix.avalie.net/api/participantes/'+participante.id,
			dataType: "json",
            async: true
            
        });
        
    }
    
	function atualizar(item){

        var participante = JSON.stringify(item);
        
		$.ajax({
			type: "PUT",
			url: 'http://matrix.avalie.net/api/participantes/'+item.id,
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			data: participante,
            async: false
            
        });  
        
	}
	function obterItem(propriedade, valor){

		return obterTodosOsItens().find(function(objeto){
            return objeto[propriedade] === valor;
            
        });
        
	}
	function obterItens(propriedade, valor){

		return obterTodosOsItens().filter(function(objeto){
            return objeto[propriedade] === valor;
            
		});
	}
	function obterTodosOsItens(){

        var itens = [];
        
		$.ajax({
			type: 'GET',
			url: 'http://matrix.avalie.net/api/participantes/',
			dataType: "json",
			async: false,
			success: function(data){
                itens = data;
                
            }
            
        });
        
        return itens;
        
    }
    
	return{
		adicionar,
		remover,
		atualizar,
		obterItem,
		obterItens,
		obterTodosOsItens	
	};
}