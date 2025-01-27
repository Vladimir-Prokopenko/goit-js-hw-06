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

const listGallertRef = document.querySelector(".gallery");

const madeItemImages = ({ url, alt }) => {
  return `
    <li class = item__gallery>
      <img src="${url}" alt="${alt}">
    </li>
    `;
};

const createListHtml = (arreyImages) => {
  return arreyImages.map(madeItemImages).join("");
};

const elenents = createListHtml(images);

listGallertRef.insertAdjacentHTML("afterbegin", elenents);

// // Находим список ul.gallery
// const gallery = document.querySelector(".gallery");

// // Генерируем разметку для каждого изображения
// const markup = images
//   .map(
//     ({ url, alt }) =>
//       `<li class="gallery-item"><img src="${url}" alt="${alt}" class="gallery-image"></li>`
//   )
//   .join("");

// // Вставляем разметку за одну операцию
// gallery.insertAdjacentHTML("beforeend", markup);

// // Добавляем стили для галереи через JavaScript (можно использовать CSS отдельно)
// gallery.style.display = "flex";
// gallery.style.gap = "15px";
// gallery.style.listStyle = "none";
// gallery.style.padding = "0";
// gallery.style.margin = "0";

// const imagesElements = gallery.querySelectorAll(".gallery-image");
// imagesElements.forEach((img) => {
//   img.style.width = "300px";
//   img.style.height = "auto";
//   img.style.borderRadius = "8px";
// });
