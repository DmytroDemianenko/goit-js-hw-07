const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsListEl = document.querySelector("#ingredients");
//console.log(ingredientsListEl);
const ret = [];
ingredients.forEach((element, ingredients) => {
  ret.push(document.createElement("li"));
  ret.push.textContent = ingredients;
  //return ingredientsItemEl;
});
console.log(ret);
ingredientsListEl.append(...ret);
