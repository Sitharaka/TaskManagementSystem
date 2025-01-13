// this is the script
document.getElementById('add-task').addEventListener('click', function () {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    if (taskInput.value.trim() !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = taskInput.value;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', function () {
        taskList.removeChild(listItem);
      });
  
      listItem.appendChild(deleteBtn);
      taskList.appendChild(listItem);
  
      taskInput.value = '';
    }
  });
  