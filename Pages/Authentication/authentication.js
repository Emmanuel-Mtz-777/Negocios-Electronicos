const logEmail = document.getElementById("logEmail");
const logPassword = document.getElementById("logPassword");
const login = document.getElementById("login");
const logError = document.querySelector(".logError");

const verifyUser = (users, email, password) => {
    return users.find(user => user.email === email && user.password === password);
};

fetch('/../Assets/Data/users.json')
    .then(response => response.json())
    .then(users => {
        login.addEventListener('click', (e) => {
            e.preventDefault();  
            const email = logEmail.value;
            const password = logPassword.value;
            const validUser = verifyUser(users, email, password);

            // Verificamos si el usuario existe y si es admin
            if (validUser) {
                if (validUser.email === "admin" && validUser.password === "Admin12345#") {
                    window.location.href = "/Pages/Admin/admin.html";  // Redirigir al panel de admin
                } else {
                    window.location.href = "/index.html";  // Redirigir a la página principal
                }
            } else {
                logError.innerHTML = "Usuario no encontrado";
                logError.style.color = "red";
                logError.style.margin = "10px";
            }
        });
    })
    .catch(error => {
        console.log("Error cargando el JSON:", error);
        logError.innerHTML = "Error al cargar los usuarios.";
        logError.style.color = "red";
    });



const regEmail = document.getElementById("regEmail");
const regPassword = document.getElementById("regPassword");
const regPassConfrm = document.getElementById("regConfirmPassword");
const regUser = document.getElementById("regUser");
const regResult = document.querySelector(".regError");

regUser.addEventListener("click", (e) => {
    e.preventDefault();
    const emailValid = regEmail.checkValidity();
    if (!emailValid) {
        regResult.innerHTML = "Por favor ingresa un email válido";
        regResult.style.margin = "10px";
        regResult.style.color = "red";
        return;
    }
    let error = verificar();
    if (error[0]) {
        regResult.innerHTML = error[1];
        regResult.style.margin = "10px";
        regResult.style.color = "red";
    }
    const newUser={
        email:regEmail.value,
        password:regPassword.value
    };

    saveUser(newUser);
});

const verificar = () => {
    const passwordFormat = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    if (!passwordFormat.test(regPassword.value)) {
        return [true, "La contraseña debe tener mínimo 8 caracteres, una mayúscula y un carácter especial"];
    }
    if (regPassword.value !== regPassConfrm.value) {
        return [true, "Las contraseñas deben coincidir"];
    }

    return [false];
};

const saveUser =(user)=>{
    fetch("http://localhost:3000/saveUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
    
    .then(response=>response.json())
    .then(data=>{
        if(data.success){
            regResult.innerHTML="Usuario creado con exito";
            regResult.style.color="green"
            regResult.style.margin="10px"
        }else{
            regResult.innerHTML="Error al crear usuario, intente mas tarde";
            regResult.style.color="red"
            regResult.style.margin="10px"
        }
    })
    .catch(error=>{
        regResult.innerHTML="Error al conectar con el servidor";
        regResult.style.color="red"
        regResult.style.margin="10px"
        console.log("Error al enviar datos: ",error)
    })
}