let amigos = [];

function agregarAmigo() {
    let entrada = document.getElementById("amigo");
    let nombre = entrada.value.trim(); // Eliminar espacios en blanco

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    // Verificar si el nombre ya está en la lista
    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
    } else {
        alert("Este amigo ya está en la lista o el campo está vacío.");
    }


    entrada.value = ""; // Limpiar el campo después de agregar
}

// Escuchar el evento Enter en el campo de texto
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();  // Llamar a agregarAmigo cuando se presiona Enter
    }
});

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach(nombre => {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nombre;
        lista.appendChild(nuevoElemento);
    });
}

function sortearAmigo() {
    // Verificar si hay amigos disponibles para sortear
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    // Sortear un amigo aleatorio
    let amigoSorteado = Math.floor(Math.random() * amigos.length);
    let nombreSorteado = amigos[amigoSorteado];
    console.log(nombreSorteado);

    // Mostrar el nombre sorteado en el <h1>
    document.getElementById("resultadoSorteo").textContent = `El amigo sorteado es: ${nombreSorteado}`;

    // Eliminar el amigo sorteado del arreglo
    amigos.splice(amigoSorteado, 1);

    // Actualizar la lista de amigos en la interfaz (si deseas)
    actualizarLista();
}



