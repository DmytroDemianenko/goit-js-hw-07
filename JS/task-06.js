const inputEl = document.querySelector("#validation-input");
const length = inputEl.getAttribute("data-length");

inputEl.addEventListener("input", onInputBlur);
function onInputBlur(e) {
  if (length != e.currentTarget.value.length) {
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
}
