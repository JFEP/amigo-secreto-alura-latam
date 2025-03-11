// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombres = [];

let nombreAmigo;

function agregarAmigo(){

    nombreAmigo = document.getElementById('amigo').value;

    if(nombreAmigo ==''){
        alert('Debe ingresar un nombre valido');
    }else{
        listaNombres.push(nombreAmigo)
        console.log(listaNombres);
        console.log(listaNombres.length);
        document.getElementById('amigo').value = ''; // Limpia el input después de agregar
    }

        // Limpiar la lista <ul> para evitar duplicados
        listaAmigos.innerHTML = '';
   // Volver a renderizar toda la lista actualizada
   listaNombres.forEach(function (nombre) {
    let item = document.createElement('li'); // Crear <li>
    item.innerText = nombre;                // Asignar el nombre correcto
    listaAmigos.appendChild(item);          // Agregar <li> al <ul>
});

return;
}

function sortearAmigo() {
    // Verificar que haya amigos en la lista
    if (listaNombres.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        limpiarResultados();
        return;
    }

    let numeroLimite = listaNombres.length;

    // Obtener un índice aleatorio
    let indiceElegido = Math.floor(Math.random() * numeroLimite);

    // Obtener el nombre correspondiente
    let amigoElegido = listaNombres[indiceElegido];

    // Mostrar el resultado en la lista <ul>
    let resultadoLista = document.getElementById('resultado');
    if (resultadoLista) {
        let item = document.createElement('li');
        item.innerText = "Amigo sorteado: " + amigoElegido;
        resultadoLista.appendChild(item);
    }

    return amigoElegido;
}

function limpiarResultados() {
    let resultadoLista = document.getElementById('resultado');
    if (resultadoLista) {
        resultadoLista.innerHTML = ''; // Limpiar la lista de resultados
        listaAmigos.innerHTML = '';
    }
}   
