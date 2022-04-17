let counterValue = 0;
const counter = document.querySelector("#counter");
const value = document.querySelector("#value");

const decrement = counter.firstElementChild;
const increment = counter.lastElementChild;

const onDecrementButtonClick = () => value.textContent = counterValue -= 1;
const onIncrementButtonClick = () => value.textContent = counterValue += 1;

decrement.addEventListener("click", onDecrementButtonClick);
increment.addEventListener("click", onIncrementButtonClick);



