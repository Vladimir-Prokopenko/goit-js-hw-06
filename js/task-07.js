const inputFontSizeControl = document.querySelector("#font-size-control");

const textChangeSpan = document.querySelector("#text");

inputFontSizeControl.addEventListener("input", onChangeClick);

function onChangeClick(event) {
  textChangeSpan.style.fontSize = event.currentTarget.value + "px";
}
