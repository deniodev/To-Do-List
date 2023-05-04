/* Updates the "completed" status of a task in the "todoList" array based on its index.
     Then, update local storage. */
const complete = (id) => {
  const todo = JSON.parse(localStorage.getItem('tasks'));
  todo.forEach((item) => {
    if (item.index - 1 === id) {
      if (item.completed === false) {
        item.completed = true;
      } else {
        item.completed = false;
      }
    }
  });
  localStorage.setItem('tasks', JSON.stringify(todo));
};

export default complete;