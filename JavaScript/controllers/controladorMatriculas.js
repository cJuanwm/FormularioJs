//Definiendo cinco estudiantes para matricular en Globant

let studentOne = {
  id: 1,
  name: "Katalina perez",
  age: 30,
  cashPayment: false,
  pendingInstallment: 15,
  debtBalance: 3000000,
};

let studentTwo = {
  id: 2,
  name: "Julian Perez",
  age: 25,
  cashPayment: false,
  pendingInstallment: 11,
  debtBalance: 2500000,
};

let studentThree = {
  id: 3,
  name: "Juan José",
  age: 19,
  cashPayment: true,
  pendingInstallment: 0,
  debtBalance: 0,
};

let studentFour = {
  id: 4,
  name: "Isabella",
  age: 23,
  cashPayment: false,
  pendingInstallment: 7,
  debtBalance: 1200000,
};

let studentFive = {
  id: 5,
  name: "Caren Lopez",
  age: 22,
  cashPayment: true,
  pendingInstallment: 0,
  debtBalance: 0,
};

let students = [studentOne, studentTwo, studentThree, studentFour, studentFive];

let studentsPOO = Array(
  studentOne,
  studentTwo,
  studentThree,
  studentFour,
  studentFive
);

//Cambiando el texto de cualquier etiqueta
//1. Tener la referencia a la etiqueta

//let etiquetaTituloUno = document.getElementById("name1");

//2. Utilizo la propiedad text content para alterar el contenido del texto

//etiquetaTituloUno.textContent = students[0].name;

//Recorriendo un arreglo

/*students.forEach(function (student) {
  console.log(student);
}); */

//Generando contenido dinámico con Js
//1. Tener un arreglo de datos
//2. Referencia a la base o componente padre
let row = document.getElementById("row");

//3. Recorro el arreglo de datos y comienzo a generar etiquetas
//desde JS (Traversing)

students.forEach(function (student) {
  //Que quieres crear?
  //Solo puedo crear etiquetas reales de html

  let column = document.createElement("div");
  column.classList.add("col");

  let card = document.createElement("div");
  card.classList.add("card", "h-100", "shadow");

  let studentName = document.createElement("h3");
  studentName.classList.add("text-center");
  studentName.textContent = student.name;

  let studentAge = document.createElement("h3");
  studentAge.classList.add("text-center");
  studentAge.textContent = "Age: " + student.age;

  let studentCashPayment = document.createElement("h2");
  studentCashPayment.classList.add("text-center");
  studentCashPayment.textContent = "CashPayment: " + student.cashPayment;

  //Asocio los elementos creados al componente padre
  //Hijos de cada etiqueta
  row.appendChild(column);
  column.appendChild(card);
  card.appendChild(studentName);
  card.appendChild(studentAge);
  card.appendChild(studentCashPayment);
});
