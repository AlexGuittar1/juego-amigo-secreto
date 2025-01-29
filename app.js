let amigos = [];

function agregarAmigo() {
    let entrada = document.getElementById("amigo");
    let nombre = entrada.value.trim(); // Eliminar espacios en blanco

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();

    entrada.value = ""; // Limpiar el campo después de agregar
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach(nombre => {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nombre;
        lista.appendChild(nuevoElemento);
    });
}
