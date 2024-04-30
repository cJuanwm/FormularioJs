//Scope de las variables de JavaScript

//Almacenando una etiqueta HTML en una variable de JS
//Hago esto para poder controlar esa etiqueta desde la logica de JS

let productNameBox = document.getElementById('nombreProducto');

let productTipe = document.getElementById('tipoProducto');

let productQuantity = document.getElementById('cantidadProducto');

let price = document.getElementById('precio');

let description = document.getElementById('descripcion');

let termsConditions = document.getElementById('terminosCondicionesBox')

let buttonId = document.getElementById('botonId');

//¿Como carajos detecto un evento en Js?
//Paso 1. Una vez tenga una variable que almacena la etiqueta sobre la cual quiero escuchar el evento
//Paso 2. Utilizar la funcion o metodo propio de Js watchdogs(Perro guardian)
buttonId.addEventListener("click", function(evento){

    evento.preventDefault;

    //Logica que deseo activar si el evento se detecto con exito
    console.log("Acabam de darle click a tu formulario")

    //¿Como capturar el valor de un input de un formulario?

})