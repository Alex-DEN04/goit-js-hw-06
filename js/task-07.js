const refs = {
    inputEl: document.querySelector("#font-size-control"),
    textEl: document.querySelector("#text"),
}

refs.inputEl.addEventListener("input", onInputHandler);

function onInputHandler() {
    const value = refs.inputEl.value;
    refs.textEl.style.fontSize = `${value}px`;
}