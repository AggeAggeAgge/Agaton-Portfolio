let layer = document.querySelector(".fade-layer");
layer.addEventListener("click", showMenu);

let button = document.querySelector("#navButton");
button.addEventListener("click", showMenu);


function showMenu() {
    console.log("klickad1")
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible");
}