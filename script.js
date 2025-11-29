function main() {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  function addTasks() {
    const taskText = taskInput.value.trim();
    if (!taskText) {
      alert("Please enter a task");
    }
    else {
      const task = document.createElement('li');
      task.textContent = taskText;

      const remove_button = document.createElement('button');
      remove_button.textContent = "Remove";
      remove_button.classList.add('remove-btn');
      remove_button.addEventListener('click', () => taskList.removeChild(task));

      task.appendChild(remove_button);
      taskList.appendChild(task);
      taskInput.value = '';
    }
  };

  addButton.addEventListener('click', addTasks);
  taskInput.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
      addTasks();
    }
  });
}
document.addEventListener('DOMContentLoaded', main);
