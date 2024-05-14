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

students.forEach(function (student) {
  console.log(student);
});
