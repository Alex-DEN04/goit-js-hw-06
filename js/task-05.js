const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
};
console.log(refs.output.textContent);

const onInputChange = (event) => {
    refs.output.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        refs.output.textContent = "Anonymous";
    }
}

refs.input.addEventListener("input", onInputChange);