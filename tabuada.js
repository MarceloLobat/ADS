function tabuada(){
	 var numero = document.getElementById("number").value;
	 var resultado = document.getElementById("resultado");
	 var tabuada = "";
	 
	 for (i = 0; i <= 10; i++){
	   
	    tabuada = tabuada + numero + " x " + i + " = " + i*numero + "<br>";
	  }
	  
	   resultado.innerHTML = tabuada;
}