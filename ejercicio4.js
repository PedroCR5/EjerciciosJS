//!1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
document.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    let inputInfo = document.querySelector(`.click`).value;
    console.log(inputInfo)
  }

});
//!1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
document.querySelector(`.focus`).addEventListener("focus", focusConsoleLog);
function focusConsoleLog() { console.log(document.querySelector(`.focus`).value) };

/* let inputFocus = document.querySelector(`.focus`);
function focusConsoleLog() {
  console.log(inputFocus.value);
}
inputFocus.addEventListener("focus", focusConsoleLog); */


//!1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
document.querySelector('.value').addEventListener('input', function (e) {
  console.log(e.target.value);
});
