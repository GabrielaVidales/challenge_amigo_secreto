let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (!nombre) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    mostrarListaAmigos();
    input.value = "";  // Limpiar el campo de texto
}

function mostrarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

    for (const amigo of amigos) {
        const elemento = document.createElement("li");
        elemento.textContent = amigo;
        lista.appendChild(elemento);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
