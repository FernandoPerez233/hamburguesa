var formulario = document.getElementById("calcularPrecio");

function Calcular(){
    // Código para la función Calcular

    var cantidad = document.getElementById("cantidad").value;
    var pan = formulario.pan.value;
    var tamaño = formulario.tam.value; 
    
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
    else{
        alert("Seleccione un tamaño válido.");
        return;
    }

    if(pan == "integral"){
        total += 10;
    }
    else if(pan == "blanco"){
        total += 0; // sin costo extra
    }
    else if(pan == "papa"){
        total += 15;
    }
    else if(pan == "parmesano"){
        total += 20;
    }
    else{
        alert("Seleccione un tipo de pan válido.");
        return;
    }

    var ingredientesCosto = 5;
    
    if(document.getElementById("tomate").checked){
        total += ingredientesCosto;
    }
    if(document.getElementById("lechuga").checked){
        total += ingredientesCosto;
    }
    if(document.getElementById("queso").checked){
        total += ingredientesCosto;
    }
    if(document.getElementById("aguacate").checked){
        total += ingredientesCosto;
    }
    if(document.getElementById("tocino").checked){
        total += ingredientesCosto;
    }
    if(document.getElementById("jamon").checked){
        total += ingredientesCosto;
    }
    if(document.getElementById("pepinillos").checked){
        total += ingredientesCosto;
    }
    if(document.getElementById("champiñones").checked){
        total += ingredientesCosto;
    }
    if(document.getElementById("pimientos").checked){
        total += ingredientesCosto;
    }
    if(document.getElementById("cebolla").checked){
        total += ingredientesCosto;
    }
    if(document.getElementById("salchicha").checked){
        total += ingredientesCosto;
    }


        var combo = document.getElementById("combo").value;
        
        if(combo == "si"){
            total += 50;
        }
    
        formulario.total.value = total * cantidad;
    }