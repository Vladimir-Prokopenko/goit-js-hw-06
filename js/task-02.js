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

// // Находим список ul#ingredients
// const ingredientsList = document.querySelector("#ingredients");

// // Создаем элементы <li> для каждого ингредиента
// const elements = ingredients.map((ingredient) => {
//   const li = document.createElement("li"); // Создаем элемент <li>
//   li.textContent = ingredient; // Устанавливаем текстовое содержимое
//   li.classList.add("item"); // Добавляем класс item
//   return li;
// });

// // Вставляем все элементы <li> за одну операцию в список
// ingredientsList.append(...elements);
