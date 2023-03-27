const validatePhone = (phone) => {
  const phoneRegex = /^\+\d\(\d{3}\)\d{3}-\d{4}$/;
  return phoneRegex.test(phone);
}

console.log(validatePhone('+7(123)123-1234'));