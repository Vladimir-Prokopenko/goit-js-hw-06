const loginFormRef = document.querySelector(".login-form");
const inputEemailRef = document.querySelector("[name = email]");
const inputPasswordRef = document.querySelector("[name = password]");
const buttonTypeSubmitRef = loginFormRef.querySelector("button");

loginFormRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (!mail || !password) {
    alert("Все поля должны быть заполнены!");
  } else {
    const formData = {
      mail,
      password,
    };
    console.log(formData);

    loginFormRef.reset();
  }
}
