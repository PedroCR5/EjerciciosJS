//! 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
let newUl = document.createElement("ul");
newUl.innerText = "He creado una lista ul";
console.log(newUl.textContent);
document.body.appendChild(newUl);
countries.forEach(element => {
  let newLi = document.createElement("li");
  newLi.innerText = `${element}`
  console.log(newLi.textContent);
  newUl.appendChild(newLi);
});

//! 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const eliminateClass = document.querySelectorAll(".fn-remove-me");
eliminateClass.forEach(element => {
  element.remove();
});
//! 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let newUl3 = document.createElement("ul");
newUl3.innerText = "He creado otra lista ul";
console.log(newUl3.textContent);
let printHereDiv = document.querySelector(`[data-function="printHere"]`)
printHereDiv.appendChild(newUl3);
cars.forEach(element => {
  let newLi = document.createElement("li");
  newLi.innerText = `${element}`
  console.log(newLi.textContent);
  newUl3.appendChild(newLi);
});
//! 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];
for (i = 0; i < countries2.length; i++) {
  let newDiv = document.createElement("div");
  newDiv.classList = `newDiv${i + 1}`
  let newH4 = document.createElement("h4");
  newH4.innerHTML = countries2[i].title;
  console.log(newH4.innerHTML);
  let newImg = document.createElement("img");
  //newImg.innerHTML = countries2[i].imgUrl;
  newImg.src = countries2[i].imgUrl;
  console.log(newImg.innerHTML);
  document.body.appendChild(newDiv);
  newDiv.appendChild(newH4);
  newDiv.appendChild(newImg);
}
//! 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
let newButton = document.createElement("button");
newButton.innerHTML = `Soy un botón y elimino el último div`;
document.body.appendChild(newButton);

newButton.addEventListener("click", () => document.querySelector(".newDiv5").remove());

//! 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html
const buttonsForDivs = document.querySelectorAll("div");
for (i = 0; i < buttonsForDivs.length; i++) {
  let newButton = document.createElement("button");
  console.log(buttonsForDivs[i].className);
  if (!buttonsForDivs[i].className) {
    newButton.className = buttonsForDivs[i].id;
  } else {
    newButton.className = buttonsForDivs[i].className;
  }

  newButton.innerHTML = `Soy un botón y elimino el div con clase ${newButton.className}`;
  buttonsForDivs[i].appendChild(newButton);
}
document.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    document.querySelector(`.${event.target.className}`).remove()
  }
});

