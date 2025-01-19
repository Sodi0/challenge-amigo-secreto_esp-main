let amigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == [""]) {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(nombreAmigo);
        document.querySelector('#amigo').value = '';
    }
}
