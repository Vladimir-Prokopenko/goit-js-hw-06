const validationInput = document.querySelector("#validation-input");

const characterLength = Number(validationInput.dataset.length);

validationInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const anyEnteredValue = Number(event.currentTarget.value.length);

  if (anyEnteredValue === characterLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
}
