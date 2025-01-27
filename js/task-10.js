function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("input"),
  dataCreateButton: document.querySelector("[data-create]"),
  dataDestroyButton: document.querySelector("[data-destroy]"),
  divBoxesAll: document.querySelector("#boxes"),
};

refs.dataCreateButton.addEventListener("click", onClickCreateButton);

function onClickCreateButton(event) {
  const elements = [];
  const numberOfBoxes = refs.input.value;

  if (numberOfBoxes >= 1 && numberOfBoxes <= 100) {
    for (let i = 0; i < numberOfBoxes; i += 1) {
      const createBackgroundColor = getRandomHexColor(i);
      const stepIncreaseSquare = 30 + 10 * i + "px";

      const divBoxEl = document.createElement("div");
      divBoxEl.textContent = `B${i + 1}`;
      divBoxEl.style.width = stepIncreaseSquare;
      divBoxEl.style.height = stepIncreaseSquare;
      divBoxEl.style.backgroundColor = createBackgroundColor;
      divBoxEl.style.border = "1px solid createBackgroundColor";

      elements.push(divBoxEl);
    }
  }

  refs.divBoxesAll.append(...elements);

  refs.input.value = "";
}

refs.dataDestroyButton.addEventListener("click", onClickDestroyButton);

function onClickDestroyButton(event) {
  refs.divBoxesAll.innerHTML = "";
}

// // Функция для генерации случайного цвета
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// // Находим элементы в DOM
// const controls = document.querySelector("#controls");
// const input = controls.querySelector("input");
// const createBtn = controls.querySelector("[data-create]");
// const destroyBtn = controls.querySelector("[data-destroy]");
// const boxesContainer = document.querySelector("#boxes");

// // Функция создания коллекции элементов
// function createBoxes(amount) {
//   const boxes = [];
//   let size = 30; // Начальный размер
//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement("div");
//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     box.style.margin = "5px"; // Добавим отступы для визуального эффекта
//     boxes.push(box);
//     size += 10; // Увеличиваем размер на 10px
//   }
//   boxesContainer.append(...boxes); // Добавляем все элементы за одну операцию
// }

// // Функция очистки коллекции
// function destroyBoxes() {
//   boxesContainer.innerHTML = ""; // Удаляем содержимое контейнера
// }

// // Обработчик кнопки создания
// createBtn.addEventListener("click", () => {
//   const amount = Number(input.value); // Получаем значение из инпута
//   if (amount > 0) {
//     createBoxes(amount); // Создаем элементы
//   }
// });

// // Обработчик кнопки очистки
// destroyBtn.addEventListener("click", destroyBoxes);
