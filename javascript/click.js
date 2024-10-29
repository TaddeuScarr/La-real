document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const botonEnviar = document.querySelector(".enviar");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío inmediato del formulario
        botonEnviar.classList.add("clickeado"); // Aplica el cambio de color

        // Retrasa el envío del formulario para que el cambio de color sea visible
        setTimeout(function() {
            form.submit(); // Envía el formulario después de mostrar el cambio
        }, 500); // Ajusta el tiempo si necesitas más o menos tiempo
    });
});
