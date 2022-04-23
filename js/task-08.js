const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmitHandler);

function onSubmitHandler(event) {
  event.preventDefault();
  
  const email = formEl.elements.email.value;
  const password = formEl.elements.password.value;

  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
    return 
  }
 
  const formData = new FormData(event.currentTarget);
  console.log(formData);
  
  const formDataObj = {};

  for (const el of formData) {
    formDataObj[el[0]] = el[1];
  }

  console.dir(formDataObj);
  event.currentTarget.reset();
}