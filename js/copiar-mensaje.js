let btnCopiarMensaje = document.querySelector("#btn-copy");

btnCopiarMensaje.addEventListener("click", function(event){
    event.preventDefault();

    var output = document.getElementById("msg")
    if(output.value.length < 1){
        alert("prueba encriptando/desencriptando un mensaje :)")
    }else{
        output.select();
        document.execCommand("copy");
        var aviso = document.querySelector("#anuncio_mensaje_copiado");
        aviso.classList.remove("invisible");
        aviso.classList.add("anuncio");
    }
    
})