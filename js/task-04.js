const counterValueRef = document.querySelector("#value");

const counterList = document.querySelector("#counter");
const decrementButtonRef = counterList.firstElementChild;
const incrementButtonRef = counterList.lastElementChild;

let counterValue = Number(counterValueRef.textContent);

decrementButtonRef.addEventListener("click", onDecrementClick);

incrementButtonRef.addEventListener("click", onIncrementClick);

function onDecrementClick(event) {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
}

function onIncrementClick(event) {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
}

// // Инициализируем текущее значение счетчика
// let counterValue = 0;

// // Находим элементы в DOM
// const valueEl = document.querySelector("#value");
// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');

// // Функции для увеличения и уменьшения значения счетчика
// const decrement = () => {
//   counterValue -= 1; // Уменьшаем значение
//   updateUI(); // Обновляем интерфейс
// };

// const increment = () => {
//   counterValue += 1; // Увеличиваем значение
//   updateUI(); // Обновляем интерфейс
// };

// // Обновляем отображение значения
// const updateUI = () => {
//   valueEl.textContent = counterValue;
// };

// // Добавляем слушатели событий на кнопки
// decrementBtn.addEventListener("click", decrement);
// incrementBtn.addEventListener("click", increment);
