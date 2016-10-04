window.addEventListener("load", cargaPagina);

var ficha = document.getElementById("ficha");

function cargaPagina() {
    crearCard();
    ficha.addEventListener("mouseenter", ampliarCard);
    ficha.addEventListener("mouseleave", reducirCard);
}

function ampliarCard() {
    ficha.classList.add("fichaGrande");
}
function reducirCard(){
   ficha.classList.remove("fichaGrande");
}
function crearCard(){
   
    var imagen = document.createElement("img");
    imagen.classList.add("img");
    imagen.setAttribute("src", "img/productos/captainmorgan.jpg")
    var titulo = document.createElement("h5");
    titulo.textContent = "Pack Capitan Morgan";
    var precio = document.createElement("p");
    precio.classList.add("parrafo");
    precio.textContent = "29.90";

    ficha.appendChild(imagen);
    ficha.appendChild(titulo);
    ficha.appendChild(precio);

}