//navbar
let prevScrollpos = window.scrollY;

window.onscroll = function () {
    const currentScrollPos = window.scrollY;
    const navbarButton = document.querySelector(".navbar-toggler");

    if (currentScrollPos > prevScrollpos) {
        document.querySelector(".navbar").style.top = "-101px";
        if (navbarButton.getAttribute("aria-expanded") === "true") {
            document.querySelector(".navbar").style.top = "0";
        }
    } else {
        document.querySelector(".navbar").style.top = "0";
    }

    prevScrollpos = currentScrollPos;
};

//testimonios
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".boton-acordeon");

    buttons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            toggleImage(index);
        });
    });

    function toggleImage(index) {
        buttons.forEach(function (btn, i) {
            const img = btn.querySelector("img");
            img.src = i === index ? toggleSrc(img.src) : "assets/index/boton.svg";
        });
    }

    function toggleSrc(src) {
        return src.endsWith("boton-relleno.svg") ? "assets/index/boton.svg" : "assets/index/boton-relleno.svg";
    }
});

// Crear una función para generar el retardo con stagger
function calculateStagger(index) {
    return index * 200;  // Ajusta el valor según sea necesario
}

// Crear una instancia de Intersection Observer
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        // Si el elemento está en el viewport
        if (entry.isIntersecting) {
            // Comprobar la clase del elemento para determinar la animación
            if (entry.target.classList.contains('animacion-izquierda')) {
                anime({
                    targets: entry.target,
                    translateX: ['-100px', '0px'],
                    opacity: [0, 1],
                    easing: 'linear',
                    delay: calculateStagger(index),  // Utilizar la función de retardo stagger
                    duration: 500,
                });
            } else if (entry.target.classList.contains('animacion-derecha')) {
                anime({
                    targets: entry.target,
                    translateX: ['100px', '0px'],
                    opacity: [0, 1],
                    easing: 'linear',
                    delay: calculateStagger(index),  // Utilizar la función de retardo stagger
                    duration: 500,
                });
            } else if (entry.target.classList.contains('animacion-arriba')) {
                anime({
                    targets: entry.target,
                    translateY: ['-100px', '0px'],
                    opacity: [0, 1],
                    easing: 'linear',
                    delay: calculateStagger(index),  // Utilizar la función de retardo stagger
                    duration: 500,
                });
            }
            // Desconectar el observer para este elemento
            // para que la animación no se vuelva a activar
            observer.unobserve(entry.target);
        }
    });
});

// Observar cada elemento que queremos animar
document.querySelectorAll('.animacion-izquierda, .animacion-derecha, .animacion-arriba').forEach(element => {
    observer.observe(element);
});