const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];
let divToPrint = document.querySelector(`div`)
let newUl = document.createElement("ul");
newUl.innerText = "He creado una lista de lugares:";
console.log(newUl.textContent);
divToPrint.appendChild(newUl);
places.forEach(element => {
  let newLi = document.createElement("li");
  newLi.innerText = `${element}`;
  newLi.setAttribute(`data-function`, "printHere");
  console.log(newLi.textContent);
  newUl.appendChild(newLi);
});