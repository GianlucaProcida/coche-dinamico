primerFondo = document.getElementById("primer-fondo");
segundoFondo = document.getElementById("segundo-fondo");
paramover = setInterval(mover,50);
setInterval(repetir,2250);

let desplazar = 0; 

function mover() {
    desplazar -= 10;
    desplazar2 = desplazar + 450;
    posicion1 = desplazar + "px";
    posicion2 = desplazar2 + "px";
    primerFondo.style.left = posicion1;
    segundoFondo.style.left = posicion2;
}

function repetir() {
    primerFondo.style.left = "0px";
    segundoFondo.style.left = "450px";
    desplazar = 0;
}