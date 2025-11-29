function main() {

  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  function saveToStorage(tasksArray) {
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
  }

  function loadTasks() {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  }

  function createTaskElement(text) {
    const li = document.createElement('li');
    li.textContent = text;

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('remove-btn');

    // logic to remove from SCREEN and STORAGE
    removeButton.addEventListener('click', () => {
      // A. Remove from Screen
      taskList.removeChild(li);

      // B. Remove from Storage
      const currentTasks = loadTasks();
      // Filter out the task being removed
      const updatedTasks = currentTasks.filter(t => t !== text);
      saveToStorage(updatedTasks);
    });

    li.appendChild(removeButton);
    return li;
  }

  const storedTasks = loadTasks();
  for (let taskText of storedTasks) {
    const newLi = createTaskElement(taskText);
    taskList.appendChild(newLi);
  }

  function addTasks() {
    const taskText = taskInput.value.trim();
    if (!taskText) {
      alert("Please enter a task");
      return;
    }

    const newLi = createTaskElement(taskText);
    taskList.appendChild(newLi);
    taskInput.value = '';

    const currentTasks = loadTasks();
    currentTasks.push(taskText);
    saveToStorage(currentTasks);

  };

  addButton.addEventListener('click', addTasks);
  taskInput.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
      addTasks();
    }
  });
}
document.addEventListener('DOMContentLoaded', main);
