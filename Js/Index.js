var correo = ""
var contrasena = ""
var contrasena2 = ""
var mailLog = ""
var usuarioLog = ""

function getInputs() {
    correo=document.forms["registro"]["email"].value
    contrasena=document.forms["registro"]["contrasena"].value
    contrasena2=document.forms["log"]["contraseñaLog"].value
    mailLog=document.forms["log"]["emailLog"].value
}
function mostrarContrasena(){
    var tipo = document.getElementById("contraseñaLog");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}
function validarContraseña() {

    //validacion contraseñas iguales
    var contraseña1=document.getElementById("contraseña").value
    var contraseña2=document.getElementById("contraseñaRep").value
    var errorContra=document.getElementById("errorContra")

    if (contraseña1!=contraseña2) {
        errorContra.style.display="block"
        return false
}
else {
    errorContra.style.display="none"
    return true
}
}
function validarEdad() {
    //validacion edad
    var eresMayor=document.getElementById("nacimiento").value
    var añoEdad=eresMayor.split("-")
    var fecha=new Date()
    var edadActual=fecha.getFullYear()-añoEdad[0];
    var mes=añoEdad[1]
    var dia=añoEdad [2]
    var errorEdad=document.getElementById("errorEdad")

    if  (edadActual<18){
        errorEdad.style.display="block"
        return false
    }

    else if (edadActual==18) {

        if (mes>(fecha.getMonth()+1)) {
            errorEdad.style.display="block"
            return false
        }
        else if (mes==(fecha.getMonth()+1)) {

            if (dia>fecha.getDate()) {
                errorEdad.style.display="block"
                return false
            }
            else{
                errorEdad.style.display="none"
                return true
            }
        }
        else{
            errorEdad.style.display="none"
            return true
        }
    }
    else {
        errorEdad.style.display="none"
        return true
    }
}
function validarCorreo() {
    
    //validacion correo repetido
    getInputs()
    var errorCorreo=document.getElementById("errorCorreo")
    if (localStorage.getItem(correo)!=null) {  
        errorCorreo.style.display="block"     
            return false
    }
    else{
        errorCorreo.style.display="none" 
        return true
    }
}
function registro2() {
    registro()
}
function registro() {
    getInputs()
    if (validarContraseña()==true && validarCorreo()==true &&validarEdad()==true)
    {
        var usuario= {
            'user':correo,
            'pass':contrasena,
        }
        usuarioLog = JSON.stringify(usuario) 
        
        localStorage.setItem(correo, usuarioLog) 
        alert("su registro ha sido existoso")   
        return true
    }
    else{
        alert("error")
        return false
    }
}
function log_in() {
    getInputs()
    usuarioLog = localStorage.getItem(mailLog) 
    var usuario = JSON.parse(usuarioLog)
    var errorLog=document.getElementById("errorInicio")

    if (usuarioLog==null) {
        errorLog.style.display="block" 
        return false
    }
    else if (usuario.pass==contrasena2 && usuario.user==mailLog) {
        alert("bienvenido")
        window.location.href = "../Index.html"
        return true
    }
    else    {
        errorLog.style.display="block"
        return false
    }
    
}

let i = 0
let fotoActiva = []
let puntoActivo = []
let prev = document.getElementById("prev")
let next = document.getElementById("next")

function slider() {
    fotoActiva = document.getElementsByClassName("slide")
    puntoActivo = document.getElementsByClassName("navDot")
    if(i>=fotoActiva.length){i=0}
    if(i<0){i=fotoActiva.length-1}
    for (let index = 0; index < fotoActiva.length; index++) {
        fotoActiva[index].classList.remove('activa')
         puntoActivo[index].classList.remove('activeDot')
    }
    fotoActiva[i].classList.add('activa')
    puntoActivo[i].classList.add('activeDot')
    }
    
 prev.addEventListener("click", function nextTrack(){
     i--
     slider()         
 })
 next.addEventListener("click", function nextTrack(){
     i++
     slider() 
 })
 let puntos = document.getElementsByClassName("navDot")
 for(j=0; j<puntos.length; j++) {
     puntos[j].addEventListener("click", function () {
         i++
         slider()
     })
 }
 setInterval(function() {
     i++
     slider()
 }, 4000);

 let menu = document.getElementById("menu");
      let botonMenu = document.getElementById("anvorguesito")
      let raya1 =document.getElementById("t1")
      let raya2 =document.getElementById("t2")
      let raya3 =document.getElementById("t3")
     botonMenu.addEventListener("click", function desplegar() {

        if (menu.style.display=="none") {
          menu.style.display="block"
          t1.classList.add("x")
          t1.style.top="45%"
          t2.classList.add("x", "d")
          t3.classList.add("cruz")
          t3.style.bottom="50%"
        }
        else{
          menu.style.display="none"
          t1.classList.remove("x")
          t1.style.top="25%"
          t2.classList.remove("x", "d")
          t3.classList.remove("cruz")
          t3.style.bottom="25%"
        }
      })