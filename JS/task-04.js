const counterEl = document.querySelector("#counter");
const counterValue = document.querySelector("#value");
const action = document.querySelectorAll("button");

const bthDecrementEl = document.querySelector(`[data-action='decrement']`);
bthDecrementEl.addEventListener(`click`, (event) => {
  onDecrementBtnClick;
  counterValue.textContent--;
});

const bthIncrementEl = document.querySelector(`[data-action='increment']`);
bthIncrementEl.addEventListener(`click`, (event) => {
  onIncrementBtnClick;
  counterValue.textContent++;
});

function onDecrementBtnClick(event) {}
function onIncrementBtnClick(event) {}
