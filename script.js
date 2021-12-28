// Se crean las constantes para btn y body
const button= document.getElementById("btn");
const body= document.querySelector("body");

// Array con colores
const color= ["red", "green", "blue", "yellow", "pink", "grey", "lime"];

// El estilo inicial será black
body.style.backgroundColor= "black";

// Cada vez que se haga un click, mediante una constante auxiliar, se irá recorriendo el array 
// de colores, y el body adquirirá el estilo de dicha ubicación de array
// con una transición de 1 segundo
button.addEventListener("click", ()=>{
    const colorIndex= parseInt(Math.random()* color.length);
    body.style.backgroundColor= color[colorIndex];
    body.style.transition= "5s linear";
});