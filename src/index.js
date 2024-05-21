document.querySelectorAll(".scroll-nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

$(document).ready(function () {
    $("#splash").load("sections/splash.html");
    $("#montezuma").load("sections/montezuma.html");
    $("#punch").load("sections/punch.html");
    $("#swordfish").load("sections/swordfish.html");
    $("#about").load("sections/about.html");
});
