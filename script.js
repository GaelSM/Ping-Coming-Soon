const inputContainer = document.querySelector(".input__container");
const inputEmail = document.querySelector("#email");
const messageError = document.querySelector("#message__error");

const emailRegExp = /\w{4,}@(gmail|hotmail|outlook|yahoo|icloud)\.com$/;

document.querySelector("#submit").addEventListener("click", () => {
  if (!emailRegExp.test(inputEmail.value)) {
    inputContainer.classList.add("margin");
    messageError.classList.add("show__error");
    inputEmail.classList.add("outline__error");
    return;
  }

  inputContainer.classList.remove("margin");
  messageError.classList.remove("show__error");
  inputEmail.classList.remove("outline__error");
  Swal.fire({
    title: "Success!",
    text: "",
    icon: "success",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    allowOutsideClick: false,
  });

  setTimeout(() => {
    location.reload();
  }, 3000);
});
