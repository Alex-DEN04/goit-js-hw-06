const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
};
console.log(refs.output.textContent);

const onInputChange = (event) => refs.output.textContent = event.currentTarget.value;

refs.input.addEventListener("input", onInputChange);