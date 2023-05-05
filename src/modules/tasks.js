import Todos from './todos.js';
import complete from './complete.js';

export default class Tasks {
  // Initializes an empty array called "todoList" when a new instance of "Tasks" is created.
  constructor() {
    this.todoList = [];
  }

    /* Checks if there any items stored in the local storage.
    If there are, assigns them to the "todoList" array. */
    render = () => {
      if (localStorage.getItem('tasks')) {
        this.todoList = JSON.parse(localStorage.getItem('tasks'));
        // Call the "display()" method to render the items in the UI.
        this.display();
      }
    }

    // Adds an event listener to the to-do form  and calls the "newTask()" method when triggered.
    input = () => {
      const form = document.getElementById('todo-form');
      form.addEventListener('submit', () => {
        this.newTask();
      });
    }

    /* Create a new to-do item using the input from the form, assigns it a unique index,
    and adds it to the "todoList" array. */
    newTask = () => {
      const index = this.todoList.length + 1;
      const completed = false;
      const description = document.getElementById('input-box').value;
      const task = new Todos(index, completed, description);
      this.todoList.push(task);
      this.display();
      this.store();
      document.getElementById('input-box').value = '';
    }

    /* Display the tasks in the UI and Creates a new <li> element for each task and populates it
    with an input checkbox, an input text field, and a delete button. */
    display = () => {
      const lists = document.querySelector('.lists');
      lists.replaceChildren();

      this.todoList.forEach((item, id) => {
        const lists = document.querySelector('.lists');

        let completedTask;
        if (item.completed === true) {
          completedTask = 'checked';
        } else {
          completedTask = '';
        }

        const li = document.createElement('li');
        li.setAttribute('id', id);

        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', 'checkbox');
        input.onchange = () => complete(id);
        input.checked = completedTask;
        li.appendChild(input);

        const inputs = document.createElement('input');
        inputs.setAttribute('type', 'text');
        inputs.setAttribute('class', 'description');
        inputs.setAttribute('value', `${item.description}`);
        inputs.setAttribute('id', `input-${id}`);
        li.appendChild(inputs);

        const remove = document.createElement('i');
        remove.setAttribute('class', 'fa fa-remove');
        remove.onclick = () => this.removes(id);
        li.appendChild(remove);

        lists.appendChild(li);
      });
    }

    // Stores the "todoList" array in local storage as a JSON string.
    store = () => {
      localStorage.setItem('tasks', JSON.stringify(this.todoList));
    }

    /* Removes a task from the "todoList" array and updates the index of each remaining item
     and update the local storage and UI. */
    removes = (id) => {
      this.todoList.splice(id, 1);
      this.todoList.forEach((item, id) => {
        item.index = id + 1;
      });
      localStorage.setItem('tasks', JSON.stringify(this.todoList));
      this.display();
      this.store();
    }

    /* Adds an event listener to each text input and update the description of the corresponding
    task in the "todoList" array and local storage. */
    update = () => {
      const d = document.querySelectorAll('.description');
      d.forEach((descript) => {
        descript.addEventListener('input', (e) => {
          const inp = e.target.parentElement.id;
          this.todoList.forEach((item, id) => {
            if (id.toString() === inp) {
              item.description = e.target.value;
            }
          });

          localStorage.setItem('tasks', JSON.stringify(this.todoList));
        });
      });
    };
}

const task = new Tasks();
export { task };
