
let mostrar = false;
let botonR = document.getElementById("iconResp");
let Contenedor = document.getElementById("contMenu_navigation");

botonR.addEventListener("click",function(){
    if(mostrar == false){
        Contenedor.classList.add("ver");
        mostrar=true;
    }else if(mostrar== true){
        Contenedor.classList.remove("ver");
        mostrar=false;
    }
})