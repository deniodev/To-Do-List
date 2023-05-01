import './style.css';

const todoList = [
    { description: "Buy groceries", completed: false, index: 0 },
    { description: "Do laundry", completed: true, index: 1 },
    { description: "Clean the kitchen", completed: false, index: 2 },
    { description: "Workout", completed: true, index: 3 }
  ];

  const populateTaskList = (tasks) => {
    const taskList = document.getElementById('lists');

    // Sort tasks array by index
    tasks.sort((a, b) => a.index - b.index);

    // Iterate over the tasks array and create an HTML list item element for each task
    tasks.forEach((todoList) => {
      const listItem = document.createElement("li");
      listItem.textContent = todoList.description;
      taskList.appendChild(listItem);
    });
  }

  populateTaskList(todoList);