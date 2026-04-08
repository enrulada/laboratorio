// ===== FORMULARIO =====
document.getElementById("formRegistro").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let edad = document.getElementById("edad").value;
    let password = document.getElementById("password").value;

    // VALIDACIÓN
    if(nombre === "" || apellido === "" || correo === "" || edad === "" || password === "") {
        document.getElementById("mensaje").innerHTML =
            "<div class='alert alert-danger'>Todos los campos son obligatorios</div>";
        return;
    }

    // GUARDAR DATOS
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("correo", correo);

    // MENSAJE
    document.getElementById("mensaje").innerHTML =
        "<div class='alert alert-success'>Redirigiendo...</div>";

    console.log("REDIRIGIENDO...");

    // REDIRECCIÓN (DIRECTA)
    window.location.href = "bienvenido.html";
});


// ===== BOTÓN GOOGLE =====
document.getElementById("btnGoogle").addEventListener("click", function() {
    alert("Funcionalidad de Google en desarrollo 🚀");
});


// ===== COLORES AUTOMÁTICOS =====
window.addEventListener("load", function () {
    const logo = document.getElementById("logo");

    if (logo && logo.complete) {
        aplicarColores(logo);
    } else if (logo) {
        logo.addEventListener("load", function () {
            aplicarColores(logo);
        });
    }
});

function aplicarColores(img) {
    try {
        const colorThief = new ColorThief();

        const color = colorThief.getColor(img);
        const palette = colorThief.getPalette(img, 3);

        const principal = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        const secundario = `rgb(${palette[1][0]}, ${palette[1][1]}, ${palette[1][2]})`;
        const tercero = `rgb(${palette[2][0]}, ${palette[2][1]}, ${palette[2][2]})`;

        document.querySelector(".header").style.backgroundColor = principal;
        document.querySelector(".btn-custom").style.backgroundColor = secundario;
        document.querySelector(".footer").style.backgroundColor = tercero;

    } catch (error) {
        console.log("No se pudieron obtener los colores del logo");
    }
}