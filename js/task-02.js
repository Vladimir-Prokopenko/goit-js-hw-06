const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");

const makeIngredients = (arreyIngredients) => {
  return arreyIngredients.map((ingredient) => {
    const itemIngredientsRef = document.createElement("li");
    itemIngredientsRef.textContent = `${ingredient}`;
    itemIngredientsRef.classList.add("item");
    return itemIngredientsRef;
  });
};

const elenents = makeIngredients(ingredients);
listIngredients.append(...elenents);
