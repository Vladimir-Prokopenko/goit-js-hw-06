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
    return;
  } else {
    const formData = {
      mail,
      password,
    };
    console.log(formData);

    loginFormRef.reset();
  }
}

// // Находим форму в DOM
// const loginForm = document.querySelector(".login-form");

// // Функция обработки отправки формы
// const handleFormSubmit = (event) => {
//   event.preventDefault(); // Отменяем перезагрузку страницы

//   // Доступ к элементам формы
//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   // Проверяем, заполнены ли все поля
//   if (!email.value.trim() || !password.value.trim()) {
//     alert("Все поля должны быть заполнены!");
//     return;
//   }

//   // Собираем данные формы в объект
//   const formData = {
//     email: email.value.trim(),
//     password: password.value.trim(),
//   };

//   // Выводим объект в консоль
//   console.log(formData);

//   // Очищаем форму
//   event.currentTarget.reset();
// };

// // Добавляем слушатель события submit на форму
// loginForm.addEventListener("submit", handleFormSubmit);
