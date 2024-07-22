const submit = document.getElementById("contactSubmit");

document.getElementById("contactSubmit").addEventListener("click", alertFormSent);

function alertFormSent() {
    alert("Su mensaje ha sido enviado. En breve nos pondremos en contacto con usted. ¡Muchas gracias!")
};

function cambiarSrc() {
    var logoPortada = document.getElementById("logoPortada");
    if (window.innerWidth <= 600) {
        logoPortada.src = "img/logoNavbar.jpg";
    } else {
        logo.src = "img/logoPortada.jpg"; 
    }
};

window.addEventListener("load", cambiarSrc);
window.addEventListener("resize", cambiarSrc);

