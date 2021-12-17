const form = document.querySelector("#contact-form");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const validated = document.querySelector(".validation");
const button = document.querySelector("#sub-button");

function validateForm() {
  event.preventDefault();

  if (checkLength(subject.value, 8) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (emailValidation(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  validated.innerHTML = "<p>Register complete!</p>";

  form.reset();
}

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function emailValidation(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

form.addEventListener("submit", validateForm);
