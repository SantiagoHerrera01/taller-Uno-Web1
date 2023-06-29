const body = document.getElementById("body")
const sectionLogin = document.getElementById("login")
const loginRedesForm =document.getElementById("loginRedesForm")
const loginRedesEnlace =document.getElementById("loginRedesEnlace")
const loginEP =document.getElementById("loginEP")
const resetPasword =document.getElementById("resetPasword")
const sendLogin =document.getElementById("sendLogin")
const specification =document.getElementById("specification")
const divSection =document.getElementById("section")


const login= () =>{
body.classList.add("body")
sectionLogin.classList.add("login")
loginRedesForm.classList.add("login__Redes__Form")
loginRedesEnlace.classList.add("login__Redes__Enlace")
loginEP.classList.add("login__Ep")
resetPasword.classList.add("reset__Pasword")
sendLogin.classList.add("send__Login")
specification.classList.add("specification")
divSection.classList.add("section")
}