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
