let btnDesencriptar = document.querySelector("#btn-desencriptar");

btnDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    limpiarOutput();

    var form = document.querySelector("#form")
    var input = document.getElementById("input-texto");
    var mensaje = input.value;
    var mensajeDecifrado = desencriptar(mensaje);
    var output = document.getElementById("msg")
    output.value = mensajeDecifrado;

    
    form.reset();
});

function desencriptar(mensaje){
    mensaje = mensaje.replace(/enter/gi, "e");
    mensaje = mensaje.replace(/imes/gi, "i");
    mensaje = mensaje.replace(/ai/gi, "a");
    mensaje = mensaje.replace(/ober/gi, "o");
    mensaje = mensaje.replace(/ufat/gi, "u");

    return mensaje;
}