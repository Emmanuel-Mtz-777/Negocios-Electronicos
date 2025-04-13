const switchForm = (hideSelector, showSelector, borderRadius) => {
    const hide = document.querySelector(hideSelector);
    const show = document.querySelector(showSelector);
    const decoration = document.querySelector(".decoration");

    hide.style.transition = "opacity 2s ease";
    hide.style.opacity = "0";
    setTimeout(() => hide.style.display = "none", 1000);

    decoration.style.transition = "border-radius 1s ease";
    decoration.style.borderRadius = "60px";

    setTimeout(() => {
        show.style.display = "flex";
        show.style.opacity = "0";
        show.style.transform = "translateX(20px)";
        show.style.transition = "opacity 1s ease, transform 1s ease";

        setTimeout(() => {
            show.style.opacity = "1";
            show.style.transform = "translateX(0)";
            decoration.style.borderRadius = borderRadius;
        }, 50);
    }, 1000);
};

document.getElementById("register").addEventListener("click", e => {
    e.preventDefault();
    switchForm(".login", ".registration", "0 30px 30px 0");
});

document.getElementById("session").addEventListener("click", e => {
    e.preventDefault();
    switchForm(".registration", ".login", "30px 0 0 30px");
});
