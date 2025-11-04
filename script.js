var formulario = document.getElementById("calcularPrecio");

function Calcular(){
    // Código para la función Calcular

    var cantidad = document.getElementById("cantidad").value;

   // var tam = document.getElementById("chico").value;

    var tamaño = formulario.tam.value; 

    alert(tamaño);

    var total = 0;

    if(tamaño == "chico"){
        total = 100;
    }
    else if(tamaño == "mediano"){
        total = 150;
    }
    else if(tamaño == "grande"){
        total = 200;
    }

    formulario.total.value = total * cantidad;

}