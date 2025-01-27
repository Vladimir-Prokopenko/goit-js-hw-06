const inputNameRef = document.querySelector("#name-input");

const outputNameRef = document.querySelector("#name-output");

inputNameRef.addEventListener("input", onInputName);

function onInputName(event) {
  if (event.currentTarget.value) {
    outputNameRef.textContent = event.currentTarget.value;
  } else {
    outputNameRef.textContent = "Anonymous";
  }
}

// // Находим элементы в DOM
// const inputEl = document.querySelector("#name-input");
// const outputEl = document.querySelector("#name-output");

// // Функция обновления значения в span
// const updateOutput = (event) => {
//   const inputValue = event.target.value.trim(); // Получаем текущее значение инпута
//   outputEl.textContent = inputValue || "Anonymous"; // Если значение пустое, показываем "Anonymous"
// };

// // Добавляем слушатель события input на инпут
// inputEl.addEventListener("input", updateOutput);
