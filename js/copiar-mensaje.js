let btnCopiarMensaje = document.querySelector("#btn-copy");

btnCopiarMensaje.addEventListener("click", function(event){
    event.preventDefault();
    var output = document.getElementById("msg")
    output.select();
    document.execCommand("copy");
})