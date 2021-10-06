const counterEl = document.querySelector("#counter");
const counterValue = document.querySelector("#value");
console.log(counterValue.textContent);
const action = document.querySelectorAll("button");

const bthDecrementEl = document.querySelector(`[data-action='decrement']`);
// console.log(bthDecrementEl);
bthDecrementEl.addEventListener(`click`, (event) => {
  onDecrementBtnClick;
  counterValue.textContent--;
  console.log(`decrementBtnClick`);
});

const bthIncrementEl = document.querySelector(`[data-action='increment']`);
// console.log(bthIncrementEl);
bthIncrementEl.addEventListener(`click`, (event) => {
  onIncrementBtnClick;
  counterValue.textContent++;
  console.log(`incrementBtnClick`);
});

function onDecrementBtnClick(event) {}
function onIncrementBtnClick(event) {}
