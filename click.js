document.addEventListener("DOMContentLoaded", function() {
    const botonEnviar = document.querySelector(".enviar");
    botonEnviar.addEventListener("click", function() {
        botonEnviar.classList.add("clickeado");
    });
});
