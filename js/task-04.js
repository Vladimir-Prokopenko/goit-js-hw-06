const counterValueRef = document.querySelector("#value");

const counterList = document.querySelector("#counter");
const decrementButtonRef = counterList.firstElementChild;
const incrementButtonRef = counterList.lastElementChild;

let total = Number(counterValueRef.textContent);

decrementButtonRef.addEventListener("click", onDecrementClick);

incrementButtonRef.addEventListener("click", onIncrementClick);

function onDecrementClick(event) {
  total -= 1;
  counterValueRef.textContent = total;
}

function onIncrementClick(event) {
  total += 1;
  counterValueRef.textContent = total;
}
