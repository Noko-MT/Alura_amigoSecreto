// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variables utilizadas
const listAmigo = []; // Lista de amigos
const Amigo = document.getElementById("amigo");
const seeLista = document.getElementById("listaAmigos");
const seeSorteo = document.getElementById("resultado");


function agregarAmigo() {
    
    if(!Amigo.value){alert("Debes ingresar un nombre")}
    //listaAmigos
    listAmigo.push(Amigo.value);
    seeLista.innerHTML += "<h1>" + Amigo.value + "</h1>";
    console.log(listAmigo);

}

function sortearAmigo(){

    let random = Math.floor(Math.random() * listAmigo.length)
    console.log(random)
    let amigoRandom = listAmigo[random];
    seeSorteo.innerHTML = "<h1> Tu amigo secreto es: " + amigoRandom + "</h1>";
}