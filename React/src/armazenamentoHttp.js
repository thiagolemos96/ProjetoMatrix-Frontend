function ArmazenamentoHttp(){

	function adicionar(item){
		return axios.post('http://matrix.avalie.net/api/participantes/', item)
			.then(response => {
				return response.data;
			})
			.catch(error => {
				throw error.response.data.message;
			})
        
    }	
    
	function remover(id){

		return axios.delete('http://matrix.avalie.net/api/participantes/' + id)
			.then(response => response.data);
        
    }
    
	function atualizar(item){

		return axios.put('http://matrix.avalie.net/api/participantes/' + item.id, item)
			.then(response => response.data);
        
	}
	function obterItem(id){
		return axios.get('http://matrix.avalie.net/api/participantes/' + id)
			.then(response => response.data);
        
	}
	function obterItens(propriedade, valor){

		return obterTodosOsItens().filter(function(objeto){
            return objeto[propriedade] === valor;
            
		});
	}
	function obterTodosOsItens(){
		return axios.get('http://matrix.avalie.net/api/participantes/')
			.then(response =>response.data);
        
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