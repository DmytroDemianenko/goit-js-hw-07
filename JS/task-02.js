const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsList = document.querySelector("#ingredients");
const ingredientsEl = ingredients.map((ingredients) => {
  const element = document.createElement("li");
  element.textContent = ingredients;
  return element;
});
ingredientsList.append(...ingredientsEl);
