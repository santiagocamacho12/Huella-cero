var btnLogin = document.getElementById("login-button");
if(btnLogin){
    btnLogin.addEventListener("click", iniciarSesion);
}

function iniciarSesion(e){
    window.location.href = "login.html";
}