const inputFontSizeControl = document.querySelector("#font-size-control");

const textChangeSpan = document.querySelector("#text");

inputFontSizeControl.addEventListener("input", onChangeClick);

textChangeSpan.style.fontSize = inputFontSizeControl.value + "px";
function onChangeClick(event) {
  textChangeSpan.style.fontSize = event.currentTarget.value + "px";
}

// // Находим элементы в DOM
// const fontSizeControl = document.querySelector("#font-size-control");
// const textEl = document.querySelector("#text");

// // Устанавливаем начальный размер шрифта в соответствии с текущим значением ползунка
// textEl.style.fontSize = `${fontSizeControl.value}px`;

// // Функция для изменения размера шрифта
// const updateFontSize = (event) => {
//   const fontSize = event.target.value; // Текущее значение ползунка
//   textEl.style.fontSize = `${fontSize}px`; // Устанавливаем размер шрифта
// };

// // Добавляем слушатель события input на ползунок
// fontSizeControl.addEventListener("input", updateFontSize);
