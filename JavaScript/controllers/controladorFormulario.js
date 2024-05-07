//Scope de las variables de JavaScript

//Almacenando una etiqueta HTML en una variable de JS
//Hago esto para poder controlar esa etiqueta desde la logica de JS

let nameBox = document.getElementById('name');

let unitPriceBox = document.getElementById('unitPrice');

let descriptionBox = document.getElementById('description');

let pictureBox = document.getElementById('picture');

let reviewBox = document.getElementById('review');

let brandBox = document.getElementById('brand');

let buttonIdBox = document.getElementById('buttonId');

//¿Como carajos detecto un evento en Js?
//Paso 1. Una vez tenga una variable que almacena la etiqueta sobre la cual quiero escuchar el evento
//Paso 2. Utilizar la funcion o metodo propio de Js watchdogs(Perro guardian)
buttonId.addEventListener("click", function (evento) { //Deteccion de eventos

    evento.preventDefault();

    //Logica que deseo activar si el evento se detecto con exito

    //¿Como capturar el valor de un input de un formulario?

    let name = nameBox.value
    let unitPrice = unitPriceBox.value
    let description = descriptionBox.value
    let picture = pictureBox.value
    let review = reviewBox.value
    let brand = brandBox.value
    let buttonId = buttonIdBox.value

    console.log(name, unitPrice, description, picture, review, brand, buttonId);

})