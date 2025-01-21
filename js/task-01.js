const selectListElements = document.querySelector("#categories");
console.log("Number of categories:", selectListElements.children.length);

const childrenRef = selectListElements.children;

[...childrenRef].forEach((categorie) => {
  console.log("Category:", categorie.firstElementChild.textContent);
  console.log("Elements:", categorie.lastElementChild.children.length);
});
