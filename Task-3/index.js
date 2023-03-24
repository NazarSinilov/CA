const ul = document.createElement('ul');
document.body.appendChild(ul);

window.onload = async function init() {
  for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    li.innerText = `User ${i}`;
    li.id = i;
    ul.appendChild(li);
    const storageData = localStorage.getItem(`li${i}`);
    if (storageData) {
      const div = document.createElement('div');
      div.innerText = storageData;
      li.appendChild(div);
    } else {
      li.addEventListener('click', async () => {
        try {
          await fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({id: li.id}),
        }).then(res => res.json()).then( el => {
          if (li.children.length) return;
          const div = document.createElement('div');
          div.innerText = el.data;
          li.appendChild(div);
          localStorage.setItem(`li${i}`,  el.data );
        });
        } catch(err) {
          console.log(err);
        }
      });
    }
  }
}

const button = document.createElement('button');
button.innerText = 'clearStorage';
button.addEventListener('click', () => localStorage.clear())
document.body.appendChild(button);