document.getElementById("logOut").addEventListener("click", () => {
    localStorage.removeItem('userEmail');

    window.location.href = "/Pages/Authentication/authentication.html";
});


