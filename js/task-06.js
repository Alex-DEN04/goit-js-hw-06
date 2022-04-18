const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        event.currentTarget.classList.remove("invalid");
        event.currentTarget.classList.add("valid");
        return;
    } 
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
}