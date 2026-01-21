function mostrarMensaje() {
    alert("John Katzenbach es mi autor favorito de suspenso psicologico");
}
let libros = [
    {
        titulo: "El club de los psicópatas",
        imagen: "images/clubpsico.jpeg"
    },
    {
        titulo: "La historia del loco",
        imagen: "images/historialoco.webp"
    },
    {
        titulo: "Juegos de ingenio",
        imagen: "images/juegos.jpg"
    },
    {
        titulo: "El profesor",
        imagen: "images/profesor.jpeg"
    }
];

let indice = 0;

function mostrarLibro() {
    document.getElementById("tituloLibro").textContent = libros[indice].titulo;
    document.getElementById("imagenLibro").src = libros[indice].imagen;
}

function siguiente() {
    indice++;
    if (indice >= libros.length) {
        indice = 0;
    }
    mostrarLibro();
}

function anterior() {
    indice--;
    if (indice < 0) {
        indice = libros.length - 1;
    }
    mostrarLibro();
}


