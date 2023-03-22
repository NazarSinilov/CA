const table = document.querySelector('#table');
const div = document.querySelector('#div');

window.onload = async function init() {
  for (let i = 0; i < 3; i++) {
    let tr = document.createElement('tr');
    
    for (let j = 0; j < 3; j++) {
      let td = document.createElement('td');
      td.textContent = `User${i}${j}`;
      tr.appendChild(td);
      td.classList.add(`User${i}${j}`);
      td.style.border =  'solid 1px';
      td.addEventListener('click', () => changeValue(td));
    }
    
    table.appendChild(tr);
  }
}

const changeValue = (td) => {
  div.innerHTML = '';
  const input = document.createElement('input');
  const button = document.createElement('button');
  button.innerText = "Press";
  div.appendChild(input);
  div.appendChild(button);
  input.value = td.innerText;

  button.addEventListener('click', () => {
    td.innerText = input.value;
    input.remove();
    button.remove();
  })
}

