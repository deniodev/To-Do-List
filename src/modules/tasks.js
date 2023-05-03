import Todos from './todos.js';

export default class Tasks {
  constructor() {
    this.todoList = [];
  }

    render = () => {
      if (localStorage.getItem('tasks')) {
        this.todoList = JSON.parse(localStorage.getItem('tasks'));
        this.display();
      }
    }

    input = () => {
      const form = document.getElementById('todo-form');
      form.addEventListener('submit', () => {
        this.newTask();
      });
    }

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

    display = () => {
      const lists = document.querySelector('.lists');
      lists.replaceChildren();

      this.todoList.forEach((item, id) => {
        const lists = document.querySelector('.lists');

        const li = document.createElement('li');
        li.setAttribute('id', id);

        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        li.appendChild(input);

        const inputs = document.createElement('input');
        inputs.setAttribute('type', 'text');
        inputs.setAttribute('class', 'description');
        inputs.setAttribute('value', `${item.description}`);
        inputs.setAttribute('id', `input-${id}`);
        li.appendChild(inputs);

        const remove = document.createElement('i');
        remove.setAttribute('class', 'fa-solid fa-trash');
        remove.onclick = () => this.removes(id);
        li.appendChild(remove);

        lists.appendChild(li);
      });
    }

    store = () => {
      localStorage.setItem('tasks', JSON.stringify(this.todoList));
    }

    removes = (id) => {
      this.todoList.splice(id, 1);
      this.todoList.forEach((item, id) => {
        item.index = id + 1;
      });
      localStorage.setItem('tasks', JSON.stringify(this.todoList));
      this.display();
      this.store();
    }

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

const tasks = new Tasks();
export { tasks };