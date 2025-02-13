let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;
let numeroMinimo = 1;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDelUsuario = parseInt(document.getElementById('valorUsuario_juegoAdivina').value);

    if(numeroDelUsuario != '' && numeroDelUsuario >= numeroMinimo && numeroDelUsuario <= numeroMaximo){
        if(numeroDelUsuario === numeroSecreto){
            asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
            document.getElementById('reiniciarJuego_numero').removeAttribute('disabled');
        }else{
            if(numeroDelUsuario < numeroSecreto){
                asignarTextoElemento('p', 'El numero secreto es mayor');
            }else{
                asignarTextoElemento('p', 'El numero secreto es menor');
            }
        }
        intentos++;
        limpiarCaja();
        return;
    }else{
        alert('favor introducir un numero valido');
    }

}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario_juegoAdivina');
    valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if(numerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{
        if (numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales (){
    asignarTextoElemento('h2', 'Juego adivina el Numero');
    asignarTextoElemento('p', `Ingresa un numero del ${numeroMinimo} al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciarJuego_numero').setAttribute('disabled', true);
}

condicionesIniciales();