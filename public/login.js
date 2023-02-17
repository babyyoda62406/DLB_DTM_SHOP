const btnLogin =  document.getElementById("nav-login-tab")
const btnRegister = document.getElementById("nav-register-tab") 
const toggleContent = () => {
    document.getElementById("nav-login").classList.toggle("d-none")
    document.getElementById("nav-register").classList.toggle("d-none")
    btnLogin.classList.toggle("text-muted")
    btnRegister.classList.toggle("text-muted")
    btnLogin.classList.toggle("text-nav")
    btnRegister.classList.toggle("text-nav")
}


btnLogin.addEventListener("click", () => {
    toggleContent()
})
btnRegister.addEventListener("click", () => {
    toggleContent()
}) 