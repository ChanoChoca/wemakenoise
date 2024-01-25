//navbar
let prevScrollpos = window.scrollY;

window.onscroll = function () {
    const currentScrollPos = window.scrollY;
    const navbarButton = document.querySelector(".navbar-toggler");

    if (currentScrollPos > prevScrollpos) {
        document.querySelector(".navbar").style.top = "-91px";
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

//animejs (el resto del código)
function calculateStagger(index) {
    return index * 200;  // Ajusta el valor según sea necesario
}

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

            if (entry.target.classList.contains('animacion-izquierda')) {
                anime({
                    targets: entry.target,
                    translateX: ['-100px', '0px'],
                    translateY: ['-100px', '0px'],
                    skewX: ['-20deg', '0deg'],
                    opacitX: [0, 1],
                    easing: 'easeInOutBack',
                    delay: calculateStagger(index),
                    duration: 500,
                });
            } else if (entry.target.classList.contains('animacion-derecha')) {
                anime({
                    targets: entry.target,
                    translateX: ['100px', '0px'],
                    translateY: ['100px', '0px'],
                    skewX: ['20deg', '0deg'],
                    opacitX: [0, 1],
                    easing: 'easeInOutBack',
                    delay: calculateStagger(index),
                    duration: 500,
                });
            } else if (entry.target.classList.contains('animacion-arriba')) {
                anime({
                    targets: entry.target,
                    translateY: ['-100px', '0px'],
                    skewY: ['-20deg', '0deg'],
                    opacity: [0, 1],
                    easing: 'easeInOutBack',
                    delay: calculateStagger(index),
                    duration: 500,
                });
            }
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.animacion-izquierda, .animacion-derecha, .animacion-arriba').forEach(element => {
    observer.observe(element);
});