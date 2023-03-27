const form = document.querySelector('form');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const fName = formData.get('fName').trim();
  const lName = formData.get('lName').trim();
  const email = formData.get('email').trim();
  const phoneNum = formData.get('phoneNum').trim();

  if (fName.trim() && lName.trim() && doValidate(email, phoneNum)) {
    const success = document.createElement('h2');
    success.innerText = "Данные успешно введены!"
    success.style.color = 'green';
    document.body.appendChild(success);
    setTimeout( () => success.remove() ,2000)
  } else {
    const error = document.createElement('h2');
    error.innerText = "Ошибка заполнения!"
    error.style.color = 'red';
    document.body.appendChild(error);
    setTimeout( () => error.remove() ,2000)
  }
});

function validateEmail(email) { //Validates the email address
  var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) { //Validates the phone number
  var phoneRegex = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g; // Change this regex based on requirement
  return phoneRegex.test(phone);
}

function doValidate(email, phoneNum) {
  if (!validateEmail(email)){
    alert("Invalid Email");
    return false;
  } else if (!validatePhone(phoneNum)) {
    alert("Invalid Phone");
    return false;
  }
  return true;
};
