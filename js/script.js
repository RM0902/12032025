let mensaje = document.getElementById("Mensaje");
console.log(mensaje.innerText);
//alert(mensaje.innerText);

let variable;

variable = 1.666;

console.log("El tipo de dato es: "+typeof variable); //conocer el tipo de datos de var
console.log("El valor dato es: "+variable) //conocer el valor de var

variable = false;
console.log("El tipo de dato es: "+typeof variable); //conocer el tipo de datos de var
console.log("El valor dato es: "+variable) //conocer el valor de var

variable = "Hola Mundo"
console.log("El tipo de dato es: "+typeof variable); //conocer el tipo de datos de var
console.log("El valor dato es: "+variable) //conocer el valor de var

function calcular(sumando1, sumando2, salida){
    sumando1_obj = document.getElementById(sumando1);
    sumando2_obj = document.getElementById(sumando2);
    let calculo = (parseFloat(sumando1_obj.innerText) + parseFloat(sumando2_obj.innerText));
    
    document.getElementById(salida).innerHTML = calculo;
}

function crearElemento(url = null){
    if(url !== null){
        url = url
    }else{
        url = "https://as2.ftcdn.net/jpg/01/09/00/83//220_F_109008395_OQDupHMza1V6CNOzr"
    }
}


