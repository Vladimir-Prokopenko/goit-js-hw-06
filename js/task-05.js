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
