
 let menu = document.getElementById("menu");
      let botonMenu = document.getElementById("anvorguesito")
      let raya1 =document.getElementById("t1")
      let raya2 =document.getElementById("t2")
      let raya3 =document.getElementById("t3")
      let title = document.getElementById("titleH")
     botonMenu.addEventListener("click", function desplegar() {

        if (menu.style.display=="none") {
          menu.style.display="block"
          t1.classList.add("x")
          t1.style.top="45%"
          t2.classList.add("x", "d")
          t3.classList.add("cruz")
          t3.style.bottom="50%"
          title.style.width="60%"
          
        }
        else{
          menu.style.display="none"
          t1.classList.remove("x")
          t1.style.top="25%"
          t2.classList.remove("x", "d")
          t3.classList.remove("cruz")
          t3.style.bottom="25%"
          title.style.width="100%"
          
        }
      })