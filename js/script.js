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

/* ================= CHATBOT ================= */

const fab = document.getElementById("chatbotFab");
const windowChat = document.getElementById("chatbotWindow");
const closeBtn = document.getElementById("chatbotClose");
const body = document.getElementById("chatbotBody");
const input = document.getElementById("chatbotInput");
const sendBtn = document.getElementById("chatbotSend");

function addMessage(text, type) {
    const div = document.createElement("div");
    div.className = "message " + type;
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
}

function botReply(message) {
    const msg = message.toLowerCase();

    if (msg.includes("bonjour") || msg.includes("salut"))
        return "Bonjour 👋 Je suis le chatbot du département informatique.";

    if (msg.includes("departement"))
        return "Le département informatique forme les étudiants aux bases de l’informatique.";

    if (msg.includes("formation"))
        return "Consultez la page Formations pour découvrir les parcours proposés.";

    if (msg.includes("service"))
        return "Les services accompagnent les étudiants tout au long de leur parcours.";

    if (msg.includes("vie"))
        return "La vie étudiante propose des activités et projets pour les étudiants.";

    return "Je peux répondre sur le département, les formations, les services ou la vie étudiante.";
}

function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    setTimeout(() => {
        addMessage(botReply(text), "bot");
    }, 300);
}

fab.onclick = () => windowChat.style.display = "flex";
closeBtn.onclick = () => windowChat.style.display = "none";
sendBtn.onclick = sendMessage;

input.addEventListener("keydown", e => {
    if (e.key === "Enter") sendMessage();
});

addMessage("Bienvenue 👋 Posez une question sur le département informatique.", "bot");

const links = document.querySelectorAll("nav a");
    const currentPage = location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

let autoScroll = setInterval(scrollAuto, 3500);

function scrollAuto() {
    scrollBox.scrollBy({ left: 300, behavior: "smooth" });

    if (scrollBox.scrollLeft + scrollBox.clientWidth >= scrollBox.scrollWidth - 10) {
        scrollBox.scrollTo({ left: 0, behavior: "smooth" });
    }
}

scrollBox.addEventListener("mouseenter", () => clearInterval(autoScroll));
scrollBox.addEventListener("mouseleave", () => {
    autoScroll = setInterval(scrollAuto, 3500);
});




document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".month-selector button");
    const events = document.querySelectorAll(".event-card");

    // Mois actuel par défaut
    const months = [
        "Janvier","Février","Mars","Avril","Mai","Juin",
        "Juillet","Août","Septembre","Octobre","Novembre","Décembre"
    ];
    const currentMonth = months[new Date().getMonth()];

    function filterEvents(month) {
        events.forEach(event => {
            event.style.display =
                month === "Tous" || event.dataset.month === month
                ? "block"
                : "none";
        });
    }

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filterEvents(btn.dataset.month);
        });

        // Activer le mois actuel
        if (btn.dataset.month === currentMonth) {
            btn.classList.add("active");
            filterEvents(currentMonth);
        }
    });

});
