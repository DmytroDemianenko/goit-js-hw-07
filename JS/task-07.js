const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onInputChange);
function onInputChange(e) {
  console.log(e.currentTarget.value);
  textEl.style.fontSize = e.currentTarget.value + "px";
}
