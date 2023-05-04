import './style.css';
import clearAll from './modules/clear.js';
import { task } from './modules/tasks.js';

task.input();
task.render();
task.update();

// Event listener on the "clearall" button.
const clear = document.getElementById('clearall');
clear.addEventListener('click', (e) => {
  e.preventDefault();
  clearAll();
});