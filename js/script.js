document.addEventListener("DOMContentLoaded", () => {

        // === CARROUSEL PRINCIPAL (CAMPUS / HEADER) ===================
    
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    window.changeSlide = function(step) {
        showSlide(currentSlide + step);
    }

    // Défilement auto toutes les 5 sec
    setInterval(() => changeSlide(1), 5000);



        // === CARROUSEL DES PROFESSEURS (AUTOSCROLL + MANUEL) ========
    
    const scrollBox = document.getElementById("prof-scroll");

    // Flèches pour défiler
    window.scrollCarousel = function(direction) {
        const amount = 300; // largeur d'une carte
        scrollBox.scrollBy({
            left: direction * amount,
            behavior: "smooth"
        });
    };

    // Défilement automatique
    setInterval(() => {
        scrollBox.scrollBy({
            left: 300,
            behavior: "smooth"
        });

        // Si on arrive à la fin -> retour au début
        if (scrollBox.scrollLeft + scrollBox.clientWidth >= scrollBox.scrollWidth - 10) {
            scrollBox.scrollTo({ left: 0, behavior: "smooth" });
        }
    }, 3000); // toutes les 3 sec

});


// === DÉFILEMENT VERS LE PROFIL COMPLET =======================

function scrollToProfile(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}


