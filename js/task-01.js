const selectListElements = document.querySelector("#categories");
console.log("Number of categories:", selectListElements.children.length);

const childrenRef = selectListElements.children;

[...childrenRef].forEach((categorie) => {
  console.log("Category:", categorie.firstElementChild.textContent);
  console.log("Elements:", categorie.lastElementChild.children.length);
});

// // Находим список категорий по id
// const categories = document.querySelectorAll("#categories .item");

// // Выводим количество категорий
// console.log("Number of categories:", categories.length);

// // Перебираем каждую категорию и выводим информацию
// categories.forEach((category) => {
//   const title = category.querySelector("h2").textContent; // Текст заголовка
//   const elementsCount = category.querySelectorAll("ul li").length; // Количество элементов <li>

//   console.log("Category:", title);
//   console.log("Elements:", elementsCount);
// });
