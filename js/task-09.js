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
