const pantalla = document.querySelector('.pantalla');
const sumar = document.querySelector('#suma');
const restar = document.querySelector('#restar');
const multiplicar = document.querySelector('#multiplicar');
const dividir = document.querySelector('#dividir');
const igual = document.querySelector('#igual');
const borrar = document.querySelector('#borrar');
const punto = document.querySelector('#punto');

const operaciones = document.querySelectorAll('.operaciones');

const numeros = document.querySelectorAll('.numeros');

// FUNCIONES DE LA PANTALLA
function agregarNumero(numero) {
    pantalla.childNodes[0].nodeValue += numero;
}

function borrarNumero() {
    pantalla.childNodes[0].nodeValue = '';
}

// FUNCIONES DE LAS OPERACIONES

function sumarNumeros(){
    let numeros = pantalla.childNodes[0].nodeValue.split('+');
    let resultado = 0;
    console.log(numeros);
    numeros.forEach( numero => {
        resultado += parseFloat(numero);
    });
    borrarNumero();
    return resultado;
}

function restarNumeros(){
    let numeros = pantalla.childNodes[0].nodeValue.split('-');
    let resultado = parseFloat(numeros[0]);
    numeros.shift();
    numeros.forEach( numero => {
        resultado -= parseFloat(numero);
    });
    borrarNumero();
    return resultado;
}

function multiplicarNumeros(){
    let numeros = pantalla.childNodes[0].nodeValue.split('*');
    let resultado = 1;
    numeros.forEach(numero => {
        resultado *= parseFloat(numero);
    });
    borrarNumero();
    return resultado

}

function divisionNumeros(){
    let numeros = pantalla.childNodes[0].nodeValue.split('/');
    let resultado = parseFloat(numeros[0]);
    numeros.shift();
    numeros.forEach( numero => {
        resultado /= parseFloat(numero);
    });
    borrarNumero();
    return resultado;
}

function resultado(operador,operacion){
    if (operador == '+'){
        agregarNumero(operacion);
    }
    if (operador == '-'){
        agregarNumero(operacion);
    }
    if (operador == '*'){
        agregarNumero(operacion);
    }
    if (operador == '/'){
        agregarNumero(operacion);
    }



}

// EVENTOS 

borrar.addEventListener('click', borrarNumero);

operaciones.forEach( boton => {
    boton.addEventListener('click', (event) => {
        if (event.target.textContent != 'C' && event.target.textContent != '=') {
            agregarNumero(event.target.textContent);
        }
        if(event.target.textContent == '='){
            if (pantalla.childNodes[0].nodeValue.includes('+')){
               resultado('+',sumarNumeros());
            }
            if (pantalla.childNodes[0].nodeValue.includes('-')){
                resultado('-',restarNumeros());
            }
            if (pantalla.childNodes[0].nodeValue.includes('*')){
                resultado('*',multiplicarNumeros());
            }
            if (pantalla.childNodes[0].nodeValue.includes('/')){
                resultado('/',divisionNumeros());
            }
            
        }
    });
});

numeros.forEach( boton => {
    boton.addEventListener('click', (event) => {;
        if(event.target.textContent.length <= 1){
            agregarNumero(event.target.textContent);
        }
    });
});