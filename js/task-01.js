const numberOfCategories = document.querySelector("#categories");
console.log("Number of categories:", numberOfCategories.children.length);

const child = numberOfCategories.children;

[...child].forEach((categorie) => {
  console.log("Category:", categorie.firstElementChild.textContent);
  console.log("Elements:", categorie.lastElementChild.children.length);
});
