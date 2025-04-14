const orders = document.getElementById("ordersButton");
const pay = document.getElementById("pay");
const options = document.getElementById("options");
const userEmail = localStorage.getItem('userEmail');
const email = document.getElementById("email")
const showOrders = document.querySelector(".showOrders");
const showPay = document.querySelector(".showPay");
const settingAcount = document.querySelector(".settingAcount");
const paymentDate = document.querySelector(".paymentDate")
const date = new Date()

paymentDate.textContent=date.toLocaleDateString();

email.textContent=userEmail

document.getElementById("logOut").addEventListener("click", () => {
    localStorage.removeItem('userEmail');
    window.location.href = "/Pages/Authentication/authentication.html";
});

orders.addEventListener('click', () => {
    showOrders.style.display = "flex";
    showPay.style.display = "none";
    settingAcount.style.display = "none";
});

pay.addEventListener('click', () => {
    showOrders.style.display = "none";
    showPay.style.display = "flex";
    settingAcount.style.display = "none";
});

options.addEventListener('click', () => {
    showOrders.style.display = "none";
    showPay.style.display = "none";
    settingAcount.style.display = "flex";
});
