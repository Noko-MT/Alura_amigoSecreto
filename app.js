// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//console.log("Hello world  ds")



//Variables
//funciones
//Eventos
//Objetos


//Variables utilizadas
const listAmigo = [];
const Amigo = document.getElementById("amigo");
const seeLista = document.getElementById("listaAmigos");


function agregarAmigo() {
    if(!Amigo.value){alert("Debes ingresar un nombre")}

    //listaAmigos
    listAmigo.push(Amigo.value);
    seeLista.innerHTML += "<h1>" + Amigo.value + "</h1>";

    //seeLista.innerHTML += "<li>" + Amigo.value + "</li>";

    console.log(listAmigo);

}

function sortearAmigo(){
    
    
    let random = Math.floor(Math.random() * listAmigo.length)
    //seeLista.innerHTML += "<h1>" + Amigo.value + "</h1>";
    console.log(random)
}