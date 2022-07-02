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
//Fin codigo - Calcular Figuras
// Calcular  porcentae
function culcularPrecionConDescuento(precio, descuento){
    const procentajePrecionConDescuento = 100 - descuento;
    const precionConDescuento = (precio*procentajePrecionConDescuento)/100;
    return precionConDescuento;
}
function onClickDescount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputDescount = document.getElementById("inputDiscount");
    const discountValue = inputDescount.value;

    const precionConDescuento = culcularPrecionConDescuento(priceValue, discountValue);


    const resultp = document.getElementById("resultP");
    resultp.innerText = "El precion con descuento son: $"+precionConDescuento;
}
//Fin codigo - Calcular descuento

//Calcular Media Aritmetica
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
//Calcular Mediana
function calcularMediana(lista){
    const lista1 = lista.sort(function(a,b){return a-b});
    const mitadlista1 = parseInt(lista1.length/2);
    function esPar(numero){
        if(numero%2 === 0){
            return true;
        }
        else{
            return false;
        }
    }
    let mediana;
    if (esPar(lista1.length)){
        const elemento1 = lista1[mitadlista1-1];
        const elemento2 = lista1[mitadlista1];
        const promedioLista1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioLista1y2;
    }
    else{
        mediana = lista1[mitadlista1];
    }
    return mediana;
}
//Fin codigo mediana
//Codigo Moda
function calcularModa(list1){
    //const list1 = [1,1,2,3,4,2,1,2,1,2,1];
    const list1Count = {};
    list1.map(
        function(elemento){
            if(list1Count[elemento]){
                list1Count[elemento] += 1;
            }
            else{
                list1Count[elemento] = 1;
            }
        }
    );

    const listArray = Object.entries(list1Count).sort(
        function(valorAcumulado, nuevoValor){
            valorAcumulado - nuevoValor
        }
    );

    const list1Array = Object.entries(list1Count).sort(
        function(elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );

    return list1Array[list1Array.length-1];

}
//Fin codigo moda