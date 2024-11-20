/*
Autor: Camila Galvan Torres
Programa: index.html
Lenguaje: Html
Universidad: Lobos Alamedas
Fecha: 25/09/2024*/
// Función para registrar la tecla presionada
function detectarTecla(event) {
    // Mostrar la tecla presionada en la consola
    console.log('Tecla presionada:', event.key);
}

// Añadir un escuchador de eventos al documento para capturar las teclas
document.addEventListener('keydown', detectarTecla);