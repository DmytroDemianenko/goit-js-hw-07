const inputEl = document.querySelector("#validation-input");

function onInputBlur() {
  console.log(`Input has lost a Focus`);
}
inputEl.addEventListener("input", onInputBlur);

function inputMarkupCheking() {
  if (inputEl["data-length"] === inputEl.innerHTML) {
    console.log("Ok");
  }
}

console.log(inputEl.innerHTML);
// function onInputFocus() {
//   // console.log(`Input take a Focus`);
// }

// inputEl.addEventListener("input", onInputFocus);
// function checkInput(event) {
//   if (input.value.length === data - length.textContent)
//     inputEl.classList.add = ".#validation-input.valid";
// }

// function onInputChange() {
//   // console.log(`Input has changed`);
// }
// input.addEventListener("input", onInputChange);
