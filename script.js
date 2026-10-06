// Efeito de entrada nos elementos

const elementos = document.querySelectorAll(
    ".card, .spec, .hero-text, .console"
);

const observer = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach((elemento) => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(30px)";
    elemento.style.transition = "0.8s ease";

    observer.observe(elemento);

});


// Botão de explorar

document.querySelector(".grande").addEventListener("click", () => {

    document.querySelector("#jogos").scrollIntoView({
        behavior: "smooth"
    });

});


// Efeito no mouse

document.addEventListener("mousemove", (event) => {

    const console = document.querySelector(".ps5");

    const x = (window.innerWidth / 2 - event.clientX) / 80;
    const y = (window.innerHeight / 2 - event.clientY) / 80;

    if (window.innerWidth > 850) {

        console.style.transform =
            `translateY(${y}px) rotateY(${x}deg)`;

    }

});