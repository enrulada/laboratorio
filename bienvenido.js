window.addEventListener("DOMContentLoaded", function() {
    let nombre = localStorage.getItem("nombre");
    let apellido = localStorage.getItem("apellido");
    let correo = localStorage.getItem("correo");

    document.getElementById("usuario").innerHTML = `
        Hola <strong>${nombre} ${apellido}</strong><br>
        Tu correo es: ${correo}
    `;
});