const inputAdd = document.querySelector("#inputAdd");
const buttonAdd = document.querySelector("#buttonAdd");
const div = document.createElement('div');
div.style.margin = '10px';
document.body.appendChild(div);
let tasks = [];


window.onload = function() {
  console.log(localStorage.getItem('tasks'));
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  render();
};

function render() {
  div.innerHTML = '';
  tasks.forEach((el, i) => {
    const block = document.createElement('div');
    block.style.margin = '10px';
    div.appendChild(block);


    const text = document.createElement("span");
    text.innerText = el.title;
    block.appendChild(text);

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.style.margin = '10px';
    editButton.addEventListener('click', () => {
      const saveButton = document.createElement('button');
      const editInput = document.createElement('input');

      saveButton.innerText = 'Save';
      editInput.value = el.title;

      saveButton.addEventListener('click', () => {
        const editTask = {
          id: el.id,
          title: editInput.value,
        };
        tasks.splice(i, 1, editTask);
        
        saveButton.style.display = 'none';
        editInput.style.display = 'none';
        text.style.display = 'inline';
        editButton.style.display = 'inline';
        deleteButton.style.display = 'inline';
        render();
        localStorage.setItem('tasks' , JSON.stringify(tasks));
      });

      block.prepend(saveButton);
      block.prepend(editInput);

      text.style.display = 'none';
      editButton.style.display = 'none';
      deleteButton.style.display = 'none';
    });
    block.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(el.id))
    block.appendChild(deleteButton);
  });

};

const addTask = () => {
  tasks.unshift({
    id: new Date(),
    title: inputAdd.value,
  });
  localStorage.setItem('tasks' , JSON.stringify(tasks));
  render();
  inputAdd.value = '';
};


const deleteTask = (id) => {
  tasks = tasks.filter(el => el.id !== id);
  localStorage.setItem('tasks' , JSON.stringify(tasks));
  render();
}

buttonAdd.addEventListener('click', addTask);
