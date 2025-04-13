document.addEventListener("DOMContentLoaded", () => {
    const search = document.getElementById("search");
    const cancel = document.getElementById("cancel");
    const searchBox = document.querySelector(".searchBox");
    const userEmail = localStorage.getItem('userEmail');
    const account = document.getElementById("account");
    const orders = document.getElementById("orders");
    const shopCar = document.getElementById("shopCar");
    const navMenu = document.getElementById("navMenu");
    const navigation = document.querySelector(".navigation");
    const overlay = document.createElement("div");
    document.body.appendChild(overlay)
    overlay.classList.add("overlay");

    // Verificar si los elementos existen antes de hacer cualquier cosa con ellos
    if (search && cancel && searchBox && account && orders && shopCar) {
        search.addEventListener("click", (e) => {
            searchBox.classList.add("searchActive");
            search.style.display = "none";
            setTimeout(() => {
                search.style.display = "none";
            }, 400);
        });

        cancel.addEventListener("click", (e) => {
            searchBox.classList.remove("searchActive");
            setTimeout(() => {
                search.style.display = "flex";
            }, 200);
        });

        // Control de los enlaces dependiendo del estado del email en localStorage
        if (userEmail) {
            account.href = "/Pages/Account/user.html";
        } else {
            account.href = "/Pages/Authentication/authentication.html";
            orders.style.pointerEvents = "none";
            shopCar.style.pointerEvents = "none";
        }
    }

    navMenu.addEventListener("click",(e)=>{
        navigation.classList.toggle("active");
        overlay.classList.toggle("active")
    })
    overlay.addEventListener("click",()=>{
        navigation.classList.remove("active");
        overlay.classList.remove("active")
    })

    
});
