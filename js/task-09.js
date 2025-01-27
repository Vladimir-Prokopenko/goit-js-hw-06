function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyWidgetRef = document.querySelector("body");

const changeColorButtonRef = document.querySelector(".change-color");

const spanButtonColorRef = document.querySelector(".color");

changeColorButtonRef.addEventListener("click", onClickFunctionColor);

function onClickFunctionColor(event) {
  const bodyColor = getRandomHexColor();
  spanButtonColorRef.textContent = bodyColor;
  bodyWidgetRef.style.backgroundColor = bodyColor;
}

// // Функция генерации случайного цвета в формате HEX
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// // Находим элементы в DOM
// const body = document.body;
// const colorValueEl = document.querySelector(".color");
// const changeColorBtn = document.querySelector(".change-color");

// // Функция обработки клика на кнопку
// const changeBackgroundColor = () => {
//   const newColor = getRandomHexColor(); // Генерируем случайный цвет
//   body.style.backgroundColor = newColor; // Изменяем цвет фона элемента body
//   colorValueEl.textContent = newColor; // Отображаем значение цвета в span
// };

// // Добавляем слушатель события click на кнопку
// changeColorBtn.addEventListener("click", changeBackgroundColor);
