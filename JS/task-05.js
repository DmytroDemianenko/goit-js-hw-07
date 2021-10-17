const input = document.querySelector("#name-input");
const nameLabel = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);
function onInputChange(e) {
  if (input.value.trim() === "") {
    nameLabel.textContent = "незнакомец";
  } else {
    nameLabel.textContent = e.currentTarget.value;
  }
}
