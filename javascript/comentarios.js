document.addEventListener("DOMContentLoaded", function() {
    const botonesEnviar = document.querySelectorAll(".comentario-boton");

    // Cargar comentarios guardados al iniciar la página
    cargarComentarios();

    botonesEnviar.forEach((boton) => {
        boton.addEventListener("click", function() {
            const apodoInput = this.parentNode.querySelector(".comentario-apodo");
            const comentarioTexto = this.parentNode.querySelector(".comentario-texto");
            const listaComentarios = this.parentNode.querySelector(".lista-comentarios");
            const gameId = this.parentNode.getAttribute("data-id"); // Identificador único para cada juego

            if (apodoInput.value.trim() !== "" && comentarioTexto.value.trim() !== "") {
                // Obtener la fecha y hora actual
                const fecha = new Date();
                const fechaFormato = fecha.toLocaleDateString();
                const horaFormato = fecha.toLocaleTimeString();

                // Crear un nuevo objeto de comentario
                const nuevoComentario = {
                    apodo: apodoInput.value,
                    texto: comentarioTexto.value,
                    fecha: fechaFormato,
                    hora: horaFormato
                };

                // Guardar el comentario en el Local Storage usando el gameId
                guardarComentarioLocal(nuevoComentario, gameId);

                // Mostrar el comentario en la interfaz
                mostrarComentario(nuevoComentario, listaComentarios);

                // Limpiar los campos de entrada
                apodoInput.value = "";
                comentarioTexto.value = "";
            }
        });
    });

    function guardarComentarioLocal(comentario, gameId) {
        let comentariosGuardados = JSON.parse(localStorage.getItem(gameId)) || [];
        comentariosGuardados.push(comentario);
        localStorage.setItem(gameId, JSON.stringify(comentariosGuardados));
    }

    function cargarComentarios() {
        document.querySelectorAll(".comentarios").forEach((comentariosDiv) => {
            const listaComentarios = comentariosDiv.querySelector(".lista-comentarios");
            const gameId = comentariosDiv.getAttribute("data-id"); // Identificador único para cada juego
            const comentariosGuardados = JSON.parse(localStorage.getItem(gameId)) || [];
            
            comentariosGuardados.forEach((comentario) => {
                mostrarComentario(comentario, listaComentarios);
            });
        });
    }

    function mostrarComentario(comentario, listaComentarios) {
        const nuevoComentario = document.createElement("li");
        nuevoComentario.classList.add("comentario-item");
        nuevoComentario.innerHTML = `<strong>${comentario.apodo}</strong>: ${comentario.texto} <br><small>${comentario.fecha} ${comentario.hora}</small>`;
        listaComentarios.appendChild(nuevoComentario);
    }
});


