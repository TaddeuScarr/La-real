document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const botonEnviar = document.querySelector(".enviar");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        botonEnviar.classList.add("clickeado"); 

        
        setTimeout(function() {
            form.submit(); 
        }, 500);
    });
});
