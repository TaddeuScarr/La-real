
let botonGuardado = document.querySelector("#guardarLocal");
botonGuardado.addEventListener("click", function (){
    let contenido = document.getElementById("textoAGuardar").value;
    console.log("Contenido guardado:", contenido);
    localStorage.setItem("textoLocal", contenido);
    });

window.addEventListener("load", function(){
    let infoLocal = document.querySelector("#infoLocal");
    let contenido = localStorage.getItem("textoLocal");
        if (contenido) {
                infoLocal.innerText = "Contenido guardado: " + contenido;
            }
    let nombre = prompt("Ingrese su nombre: ");
        localStorage.setItem("nombreUsuario", nombre);
        document.getElementById("saludo").innerText = "Hola " + localStorage.getItem("nombreUsuario");
    });

let borrar = document.querySelector("#borrar");
    borrar.addEventListener("click", function(){
            localStorage.removeItem("textoLocal");
            document.querySelector("#infoLocal").innerText = "";
            console.log("Contenido borrado de Local Storage");
        });