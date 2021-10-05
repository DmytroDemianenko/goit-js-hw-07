const categoriesListEl = document.querySelector("#categories");

const categoriesEl = categoriesListEl.querySelectorAll(".item");
console.log(`В списке ${categoriesEl.length} категории.`);

const categoriesTitleEl = document.querySelectorAll("h2");
categoriesTitleEl.forEach((elem) =>
  console.log(`Категория: ${elem.textContent}`)
);

categoriesEl.forEach((elem) =>
  console.log(`Количество элементов: ${elem.lastElementChild.children.length}`)
);
