const inputEl = document.querySelector("#validation-input");
const length = inputEl.getAttribute("data-length");
console.log(length);

inputEl.addEventListener("input", onInputBlur);
function onInputBlur(e) {
  console.log(e.currentTarget.value.length);
  if (length != e.currentTarget.value.length) {
    inputEl.classList.add("invalid");
    console.log("Ok");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
}
