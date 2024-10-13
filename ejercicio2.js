//!1.1 Inserta dinamicamente en un html un div vacio con javascript.
const myDiv = document.createElement("div");
myDiv.innerText = "He añadido un Div";
console.log(myDiv.textContent);
document.body.appendChild(myDiv);
//!1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
myDiv.classList = "divInsert";
const myP = document.createElement("p");
myP.innerText = "He añadido un p dentro del Div";
console.log(myP.innerHTML);
myDiv.appendChild(myP);
//!1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 	loop con javascript.
const newDiv = document.createElement("div");
newDiv.innerText = "He añadido un nuevo Div";
console.log(newDiv.textContent);
document.body.appendChild(newDiv);
for (i = 0; i < 6; i++) {
  let newP = document.createElement("p");
  newP.innerText = `He añadido un nuevo ${i + 1} p dentro del Div`;
  console.log(newP.innerHTML);
  newDiv.appendChild(newP);
}
//!1.4 Inserta dinamicamente con javascript en un html una p con el 	texto 'Soy dinámico!'.
const dinamicDiv = document.createElement("div");
dinamicDiv.innerText = "He añadido un nuevo Div dinámico";
console.log(dinamicDiv.textContent);
document.body.appendChild(dinamicDiv);

let dinamicP = document.createElement("p");
dinamicP.innerText = `Soy dinámico`;
console.log(dinamicP.innerHTML);
dinamicDiv.appendChild(dinamicP);

//!1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
/* const h2WithClass = document.querySelector(`h2.fn-insert-here`);
h2WithClass.innerHTML = 'Wubba Lubba dub dub'; */
document.querySelector(`h2.fn-insert-here`).innerHTML = 'Wubba Lubba dub dub';

//!1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const newUl = document.createElement("ul");
newUl.innerText = "He creado una lista ul";
console.log(newUl.textContent);
document.body.appendChild(newUl);
for (i = 0; i < apps.length; i++) {
  let addLi = document.createElement("li");
  addLi.innerText = `${apps[i]}`;
  console.log(addLi.innerHTML);
  newUl.appendChild(addLi);
}
//!1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const eliminateClass = document.querySelectorAll(".fn-remove-me");
eliminateClass.forEach(element => {
  element.remove();
});

//!1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 	Recuerda que no solo puedes insertar elementos con .appendChild.
console.log("Ejercicio 1.8");
let primerDiv = document.querySelector("#hola");
let medioP = document.createElement("p");
medioP.innerText = `Voy en medio!`;
document.body.insertBefore(medioP, primerDiv);
console.log(medioP.innerHTML);
//!1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 	.fn-insert-here
console.log("Ejercicio 1.9");
let allDivsInsertHere = document.querySelectorAll(".fn-insert-here");
allDivsInsertHere.forEach(element => {
  let newPInsert = document.createElement("p");
  newPInsert.innerText = `Voy dentro!`;
  element.appendChild(newPInsert);
  console.log(newPInsert.innerHTML);
}) 
