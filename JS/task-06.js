const inputEl = document.querySelector("#validation-input");
console.log(inputEl);
function onInputFocus() {
  // console.log(`Input take a Focus`);
}

inputEl.addEventListener("input", onInputFocus);
function checkInput(event) {
  if (input.value.length === data - length.textContent)
    inputEl.classList.add = ".#validation-input.valid";
}

function onInputBlur() {
  //   console.log(`Input has lost a Focus`);
}
inputEl.addEventListener("input", onInputBlur);

function onInputChange() {
  console.log(`Input has changed`);
}
inputEl.addEventListener("input", onInputChange);
