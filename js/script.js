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

//movimiento vertical de contenedores
window.addEventListener('scroll', function() {
    const elements = document.getElementsByClassName('scroll-animate');
    Array.from(elements).forEach(function(element) {
        const position = element.getBoundingClientRect();

        if(position.top >= 0 && position.bottom <= window.innerHeight) {
            element.classList.add('show');
        }
    });
});

//carrusel
$(document).ready(function(){
    $('.slick-carousel').slick({
        prevArrow: false,
        nextArrow: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }
        ]
    });
});