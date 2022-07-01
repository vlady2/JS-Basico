//Ejercicio 1
//Codigo del cuadrado
console.group("Cuadrados");
function perimetroCuadrado(lado){
    return lado*4;
} 

function area(lado1 , lado2){
    return lado1*lado2;
} 
console.groupEnd();

//codigo Triangulo
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
}

function areTriangulo(bae, altura){
    return (base*altura)/2;
}
console.groupEnd();

//Codigo del Circulo
console.group("Circulo");

function diametro(radio){
    return radio*2;
}

const PI = Math.PI;
function perimetroCirculo(radio2){
    const diametro = diametro(radio2);
    return diametro*PI;
    
} 

function areaCirculo(radio){
    return (radio*radio)*PI;
}

console.groupEnd();

//aqui interactuamos con html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("imputCuadrado");
    const value = input.value;

    const perimetro =  perimetroCuadrado(value);
    alert(perimetro);
}

function calcularPerimetroArea(){
    const input = document.getElementById("imputCuadrado");
    const value = input.value;

}