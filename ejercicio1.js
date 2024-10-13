//!1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
console.log("Ejercicio 1.1")
console.log(document.querySelector(".showme").innerHTML);

//!1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
console.log("Ejercicio 1.2")
console.log(document.querySelector("#pillado").innerHTML);

//!1.3 Usa querySelector para mostrar por consola todos los p
console.log("Ejercicio 1.3")
const allP = document.querySelectorAll("p");
allP.forEach(element => {
  console.log(element.innerHTML);
});


//!1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
console.log("Ejercicio 1.4")
const allPokemonClass = document.querySelectorAll(".pokemon");
allPokemonClass.forEach(element => {
  console.log(element.innerHTML);
});
//!1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
console.log("Ejercicio 1.5")
const allTestMe = document.querySelectorAll(`[data-function="testMe"]`);
allTestMe.forEach(element => {
  console.log(element.innerHTML);
});

//!1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
console.log("Ejercicio 1.6")
console.log(allTestMe[2].innerHTML)