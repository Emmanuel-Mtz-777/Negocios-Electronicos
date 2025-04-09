const changeLogin = () => {
    const record = document.getElementById("register");

    record.addEventListener("click", (e) => {
        e.preventDefault();
        const login = document.querySelector(".login");
        const decoration = document.querySelector(".decoration");
        const register = document.querySelector(".registration");

        login.style.transition = "opacity 2s ease";
        login.style.opacity = "0";

        setTimeout(() => {
            login.style.display = "none";
        }, 1000);
        decoration.style.transition = "border-radius 1s ease";
        decoration.style.borderRadius = "60px";

        setTimeout(() => {
            register.style.display = "flex";
            register.style.opacity = "0";
            register.style.transform = "translateX(20px)";
            register.style.transition = "opacity 1s ease, transform 1s ease";

            setTimeout(() => {
                register.style.opacity = "1";
                register.style.transform = "translateX(0)";
                decoration.style.transition = "border-radius 1s ease";
                decoration.style.borderRadius = "0 60px 60px 0";
            }, 50);
        }, 1000); 
    });
};
changeLogin();

const changeRegister = () => {
    const session = document.getElementById("session");

    session.addEventListener("click", (e) => {
        e.preventDefault();
        const login = document.querySelector(".login");
        const decoration = document.querySelector(".decoration");
        const register = document.querySelector(".registration");

        register.style.transition = "opacity 2s ease";
        register.style.opacity = "0";

        setTimeout(() => {
            register.style.display = "none";
        }, 1000);
        decoration.style.transition = "border-radius 1s ease";
        decoration.style.borderRadius = "60px";

        setTimeout(() => {
            login.style.display = "flex";
            login.style.opacity = "0";
            login.style.transform = "translateX(20px)";
            login.style.transition = "opacity 1s ease, transform 1s ease";

            setTimeout(() => {
                login.style.opacity = "1";
                login.style.transform = "translateX(0)";
                decoration.style.transition = "border-radius 1s ease";
                decoration.style.borderRadius = "60px 0 0 60px";
            }, 50);
        }, 1000); 
    });
};

changeRegister();