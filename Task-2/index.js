const form = document.querySelector('form');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const login = formData.get('login');
  const password = formData.get('pass');

  try {
    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({login, password}),
    }).then(res => {
      if (res.status === 200) {
        document.body.innerHTML = '';
        const success = document.createElement('h2');
        success.innerText = 'Главная страница';
        document.body.appendChild(success);
      } else {
        const message = document.querySelector('h2');
        message.style.display = "block";
        setTimeout(() => message.style.display = "none" , 3000);
      }
    });
  } catch (err) {
    console.log(err);
  }
});
