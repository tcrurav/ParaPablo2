var tabla = [
    { nombre: "Roland", edad: 39 },
    { nombre: "Lilith", edad: 38 },
    { nombre: "Mordecai", edad: 38 },
    { nombre: "Brick", edad: 42 }
];

window.onload = cargarEventos;

function cargarEventos() {
    document.getElementById("mostrar-personajes").addEventListener("click", mostrarPersonajes, false);
    document.getElementById("nuevo-personaje").addEventListener("submit", nuevoPersonaje, false);
}

function mostrarPersonajes() {
    var cuerpoTabla = document.getElementById("mostrar-personajes");
    var todaTabla = " ";

    for (var i = 0; i < tabla.length; i++) {
        todaTabla += "<tr><td>" + tabla[i].nombre + "</td><td>" + tabla[i].edad + "</td></tr>";
    }
    cuerpoTabla.innerHTML = todaTabla;
}

function nuevoPersonaje(event) {
    event.preventDefault();

    var nombreIntroducido = document.getElementById("nombre").value;
    var edadIntoducido = document.getElementById("edad").value;

    var nuevoPersonaje = { nombre: nombreIntroducido, edad: edadIntoducido };
    tabla.push(nuevoPersonaje);

    mostrarPersonajes();
}