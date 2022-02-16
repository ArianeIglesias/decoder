function codificar(texto) {          // Função para Codificar Texto ...
	texto = texto.replace(/a/g, 'ai').replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/o/g, 'ober').replace(/u/g, 'uber');
	return texto ;                   // Função replace com substituição global
};

function decodificar(texto) {       // Função para Decofificar Texto ...
	texto = texto.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/uber/g, 'u');
	return texto ; 
};

function letraMinúscula (entrada) {   // Função que proíbe acentuação e letras minúsculas ...
	var retorno = false ; 
	if (entrada.toLowerCase() != entrada) {
		window.confirm('Entrada Inválida') ;   
		retorno = true ;
	};
	return retorno
};

document.getElementById('btn-cripto').addEventListener('click', function (event) {   // Botão Cripto.
	event.preventDefault() ;
	var textoCodificado = document.getElementById('input-texto').value ; 
	if (letraMinúscula(textoCodificado)) {
		return ;
	};
	document.getElementById('msg').value = codificar(textoCodificado);
});

document.getElementById('btn-descripto').addEventListener('click', function (event) {  //Botão Descripto.
	event.preventDefault() ;
	var textoCodificado = document.getElementById('input-texto').value ; 
	if (letraMinúscula(textoCodificado)) {
		return ; 
	};
	document.getElementById('msg').value = decodificar(textoCodificado);
}); 

document.getElementById('btn-copy').addEventListener('click', function() {            //Botão Copiar...
	document.getElementById('msg').ariaSelected();
	document.execCommand('copy'); 
	//alert('Copiado!')                             // Comando descontinuado
});
