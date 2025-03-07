document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    let nextIndex = 1; // Índice de la próxima imagen

    function changeSlide() {
        slides[currentIndex].classList.remove("active");
        slides[nextIndex].classList.add("active");

        // Avanzar los índices
        currentIndex = nextIndex;
        nextIndex = (nextIndex + 1) % slides.length;
    }

    setInterval(changeSlide, 3000); // Cambia cada 3 segundos
});