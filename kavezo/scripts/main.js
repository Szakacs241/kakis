document.addEventListener("DOMContentLoaded", function() {
    const welcomeMessage = document.querySelector("h2");
    welcomeMessage.style.opacity = 0;

    setTimeout(() => {
        welcomeMessage.style.transition = "opacity 4s";
        welcomeMessage.style.opacity = 1;
    }, 500);
    info.addEventListener("click", () => {
        info.style.color = "#00796b";
        info.style.transition = "color 0.5s";
    });
});

