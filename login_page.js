function validation() {
  var name = document.myform.name.value;
  var number = document.myform.number.value;
  var firstpassword = document.myform.password.value;
  var secondpassword = document.myform.password2.value;
  var numberPattern = /^\d{10}$/;

  // Name validation
  if (name == "" || name == null) {
    alert("Name can't be blank");
    return false;
  }

  // Number validation
  if (!number.match(numberPattern)) {
    alert("Number must be a 10-digit numeric value");
    return false;
  }

  // Password validation
  if (firstpassword === "" || firstpassword.length < 6) {
    alert("Password must be at least 6 characters long and not blank");
    return false;
  }

  // Confirm password validation
  if (firstpassword != secondpassword) {
    alert("Passwords do not match");
    return false;
  }

  return true;
}
