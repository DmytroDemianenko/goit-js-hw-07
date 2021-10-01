//const categoriesNameEl = document.querySelectorAll("h2");
//categoriesNameEl.forEach((el) => console.log(`Категория: ${el.textContent}`));

//console.log(categoriesNameEl);

//  const categoriesElementRefs1 = categoriesEl.querySelectorAll("ul");
//console.log(categoriesElementRefs1);

//const categoriesElementRefs = document.querySelectorAll("ul .item");
//categoriesElementRefs.forEach((el) =>
// console.log(`Количество элементов: ${el.length}`)
//);

//console.log(categoriesElementRefs);
//Категория: Животные
//Количество элементов: 4
// console.log(`Количество элементов: ${cat.lastChild.length}`)

const categoriesListEl = document.querySelector("#categories");
// console.log(categoriesListEl);
const categoriesEl = categoriesListEl.querySelectorAll(".item");
console.log(categoriesEl);
// console.log(`В списке ${categoriesEl.length} категории.`);
// const categoriesTitleEl = categoriesEl.querySelector("h2");
// console.log(categoriesTitleEl);
categoriesEl.forEach((element) =>
  console.log(`Категория: ${categoriesEl.nodeList}`)
);
