
/*
Autor: Camila Galvan Torres
Programa: index.html
Lenguaje: Html
Universidad: Lobos Alamedas
Fecha: 23/10/2024*/

document.addEventListener("keydown",function(event){
    const Vvvya = document.getElementById("Texto");
    const elemento = document.getElementById("Cuerpo");
    
    if(event.key ==="z"){
    
    Vvvya.innerHTML = "Quiero salir de esta carcel!!!";
    elemento.classList.toggle("Cuerpo00");
    
    }
});

// Función para registrar la tecla presionada
function detectarTecla(event) {
    // Mostrar la tecla presionada en la consola
    console.log('Tecla presionada:', event.key);
}

// Añadir un escuchador de eventos al documento para capturar las teclas
document.addEventListener('keydown', detectarTecla);
