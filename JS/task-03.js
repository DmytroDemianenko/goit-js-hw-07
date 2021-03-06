const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const makeGalleryMarkup = (images) => {
  const { url, alt } = images;
  return `
  <li>
  <img src="${url}" alt="${alt}" width=400px height=250px>
  </li>
    `;
};
const makeGalleryList = images.map(makeGalleryMarkup).join("");

const galleryList = document.querySelector("#gallery");
galleryList.insertAdjacentHTML("beforeend", makeGalleryList);

// const galleryEl = document.querySelector("#gallery");
// const galleryItemEl = images.map((element) => {
//   const item = document.createElement("li");
//   const imagesEl = document.createElement("img");
//   imagesEl.src = element["url"];
//   imagesEl.alt = element["alt"];
//   imagesEl.width = 480;
//   item.appendChild(imagesEl);
//   return item;
// });

// galleryEl.append(...galleryItemEl);
