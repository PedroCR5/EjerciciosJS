//!Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

let newUl = document.createElement("ul");
newUl.innerText = "He creado una lista de albums:";
console.log(newUl.textContent);
document.body.appendChild(newUl);
albums.forEach(element => {
  let newLi = document.createElement("li");
  newLi.innerText = `${element}`
  console.log(newLi.textContent);
  newUl.appendChild(newLi);
});