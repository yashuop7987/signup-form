const userName = document.getElementById("userName");
const myForm = document.getElementById("myForm");
const userNameError = document.getElementById("userNameError");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

myForm.addEventListener("submit", function (event) {
  if (userName.value == "") {
    userNameError.classList.add("error");
    userNameError.innerText = "Please Provide Your Username";
    event.preventDefault();
  }
});
userName.addEventListener("blur", function (event) {
  if (userName.value == "") {
    userNameError.classList.add("error");
    userNameError.innerText = "Please Provide Your Username";
  }
});
email.addEventListener("blur", function (event) {
  console.log(myForm.email.value);
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value)
  ) {
    alert("Email Validated");
  } else {
    // alert("You have entered an invalid email address!");
    alert("email not validated!!");
  }
});
password.addEventListener("blur", function (event) {
  if (password.value.length <= 8) {
    console.log("Your password should be 8 characters");
  } else {
    console.log("password Validated");
  }
});

confirmPassword.addEventListener("blur", function () {
  if (password.value == confirmPassword.value) {
    alert("password matches");
  } else {
    alert("password do not match");
  }
});
