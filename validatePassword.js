function validatePassword() {
  let passwordsMatch = false;
  let passwordElement = document.getElementById("password");
  let confirmPasswordElement = document.getElementById("confirm_password");
  if (confirmPasswordElement.value) {
    passwordsMatch = passwordElement.value === confirmPasswordElement.value;
    if (!passwordsMatch) {
      alert("passwords do not match");
      // document.getElementById('password').classList.add('input-error')
      confirmPasswordElement.classList.add("input-error");
      return false;
    } else {
      confirmPasswordElement.classList.remove("input-error");
      return true;
    }
  }
}
