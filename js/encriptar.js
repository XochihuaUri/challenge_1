let btnEncriptar = document.querySelector("#btn-encriptar");

btnEncriptar.addEventListener("click", function(event){
    event.preventDefault();

    limpiarOutput();

    var form = document.querySelector("#form")
    var input = document.getElementById("input-texto");
    var mensaje = input.value;
    var mensajeDecifrado = encriptar(mensaje);
    var output = document.getElementById("msg")
    output.value = mensajeDecifrado;
    form.reset();

});

function encriptar(mensaje){
    mensaje = mensaje.replace(/e/gi, "enter");
    mensaje = mensaje.replace(/i/gi, "imes");
    mensaje = mensaje.replace(/a/gi, "ai");
    mensaje = mensaje.replace(/o/gi, "ober");
    mensaje = mensaje.replace(/u/gi, "ufat");

    return mensaje;
}

function limpiarOutput(){
    var output = document.getElementById("msg")
    output.value = "";
    var aviso = document.querySelector("#anuncio_mensaje_copiado");
    aviso.classList.remove("anuncio");
    aviso.classList.add("invisible");
}