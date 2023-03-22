function validateLenght(element, minLength, maxLength) {
  if (element.length >= minLength && element.length <= maxLength) {
     return true;    
  }
    return false;
}

function validateLetters(element) {
  const regex = /^[A-Za-z\s]*$/i;
  if (regex.test(element)) {
    return true;
  }
    return false;
}

function validateNumbers(phoneNumber) {
  const regex = /^\d+$/;
  if (regex.test(phoneNumber)) {
    return true;
  }
    return false;
}

function validateEmail(emailAddress) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(emailAddress.trim())) {
    return true;
  }
    return false;
}

//Password should contain at least one uppercase letter,one lowercase letter, one digit, one special symbol, more than 4 character
function validatePassword(password) {
  if (
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password) &&
    password.length >= 4
  ) {
    return true;
  }
    return false;
}
