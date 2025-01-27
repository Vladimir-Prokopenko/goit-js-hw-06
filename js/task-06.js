const validationInput = document.querySelector("#validation-input");

const characterLength = Number(validationInput.dataset.length);

validationInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const anyEnteredValue = Number(event.currentTarget.value.length);

  if (anyEnteredValue === characterLength) {
    validationInput.classList.add("valid");
    if (validationInput.classList.contains("invalid"))
      validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    if (validationInput.classList.contains("valid")) {
    }
    validationInput.classList.remove("valid");
  }
}

// // Находим инпут в DOM
// const inputEl = document.querySelector("#validation-input");

// // Функция проверки длины текста
// const validateInput = (event) => {
//   const inputLength = event.target.value.trim().length; // Текущая длина текста
//   const requiredLength = Number(inputEl.dataset.length); // Требуемая длина из data-length

//   // Удаляем классы valid и invalid перед проверкой
//   inputEl.classList.remove("valid", "invalid");

//   // Добавляем класс valid или invalid в зависимости от длины
//   if (inputLength === requiredLength) {
//     inputEl.classList.add("valid");
//   } else {
//     inputEl.classList.add("invalid");
//   }
// };

// // Добавляем слушатель события blur на инпут
// inputEl.addEventListener("blur", validateInput);
