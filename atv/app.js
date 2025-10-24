document.addEventListener('DOMContentLoaded', () => {
  const addTaskBtn = document.getElementById('addTask');
  const newTaskInput = document.getElementById('new-task');

  const todoList = document.querySelector('.todo-list ul');
  const completeList = document.querySelector('.complete-list ul');

  addTaskBtn.addEventListener('click', () => {
    const taskText = newTaskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const label = document.createElement('label');
    label.textContent = taskText;

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        moveToCompleted(li, taskText);
      }
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    todoList.appendChild(li);
    newTaskInput.value = '';
  });

  function moveToCompleted(taskItem, taskText) {
    taskItem.remove();

    const li = document.createElement('li');
    li.textContent = taskText + ' ';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Apagar';
    deleteBtn.classList.add('delete');

    deleteBtn.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(deleteBtn);
    completeList.appendChild(li);
  }
});
