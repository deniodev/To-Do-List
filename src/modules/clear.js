import { task } from './tasks.js';

/* Clear all completed tasks from the todoList array, update their indexes
and store the updated list in the localStorage. */
const clearAll = () => {
  let incomplete = task.todoList.filter((item) => {
    if (item.completed !== true) {
      return item;
    } return null;
  });

  incomplete = incomplete.map((item, id) => {
    item.index = id + 1;
    return item;
  });

  localStorage.setItem('tasks', JSON.stringify(incomplete));
  task.render();
};

export default clearAll;