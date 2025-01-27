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
