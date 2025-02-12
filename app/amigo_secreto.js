let nombreDeAmigo;
let listaDeAmigos = [];

//capturar los nombres
function agregarAmigo(){
    nombreDeAmigo = document.getElementById('amigo').value;
    if(nombreDeAmigo != ''){
        let amigos = document.getElementById('listaAmigos');
        amigos.textContent = nombreDeAmigo;        
        listaDeAmigos.push(nombreDeAmigo);
        
        listarAmigos();
        limpiarCampo();
    }else{
        alert('Favor ingresar un nombre valido.');
    }
}

//listar los nombres
function listarAmigos() {
    let listado = document.getElementById('listaAmigos');
    listado.innerHTML = '';
    listaDeAmigos.forEach(
        amigo =>{
            let listaAmigos = document.createElement('li');
            listaAmigos.textContent = amigo;
            listado.appendChild(listaAmigos);
        }
    )
}

//sortear los nombres para elegir uno
function elegirAmigo(lista) {
    let posicionAmigo = Math.floor(Math.random() * listaDeAmigos.length);
    return listaDeAmigos [posicionAmigo];
}

//presentar el nombre elegido
function sortearAmigo() {
    let amigo = elegirAmigo(listaDeAmigos);
    let resultado = document.getElementById('resultado');
    resultado.textContent = `Su amigo secreto es: ${amigo}`;
    document.getElementById('reiniciarJuego_amigo').removeAttribute('disabled');
}

function limpiarCampo() {
    let campo = document.getElementById('amigo');
    campo.value = '';
}

function condicionInicial(){
    let listaAmigos = document.getElementById('listaAmigos');
    let listaResultado = document.getElementById('resultado');
    listaAmigos.innerHTML = '';
    listaResultado.innerHTML = '';
    listaDeAmigos = [];
}

//reiniciar el juego
function reiniciarJuegoAmigo(){
    limpiarCampo();
    condicionInicial();
    document.querySelector('#reiniciarJuego_amigo').setAttribute('disabled', true);
}

