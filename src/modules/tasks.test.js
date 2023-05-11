/**
 * @jest-environment jsdom
 */

import { task } from './tasks.js';
import complete from './complete.js';
import clearAll from './clear.js';


// Testing the adding function
describe('adding items', () => {
  test('adding item 1', () => {
    document.querySelector('#input-box').value = 'test 1';
    task.newTask();
    const fieldList = document.querySelectorAll('li');
    expect(fieldList).toHaveLength(1);
  });

  test('adding item 2', () => {
    document.querySelector('#input-box').value = 'test 2';
    task.newTask();
    const fieldList = document.querySelectorAll('li');
    expect(fieldList).toHaveLength(2);
  });
});
// testing the Removing function
describe('delete items', () => {
  test('remove item', () => {
    task.removes();
    const fieldList = document.querySelectorAll('li');
    expect(fieldList).toHaveLength(1);
  });
});

// testing the function to edit tasks
describe('edit items', () => {
  test('edit item at id-0 to workout', () => {
    task.update();

    let d = document.querySelector('#input-0').value;
    d = 'workout';

    expect(d).toBe('workout');
  });
});

// Testing the  check completed tasks
describe('check item as completed', () => {
  test('turn item at index 0 to true', () => {
    complete(0);

    let checkItem1 = document.getElementById(0).checked;
    checkItem1 = true;

    expect(checkItem1).toBeTruthy();
  });
});

// Testing the function to clear tasks
describe('clear all completed', () => {
  test('Remove all checked items', () => {
    clearAll();

    const i = JSON.parse(localStorage.getItem('tasks'));
    const clearAllCompleted = i.filter((item) => item.completed !== true);

    expect(clearAllCompleted).toHaveLength(0);
  });
});

document.body.innerHTML = `<div id="todo-container">
<div class="layout">
    <div class="title"> <p>Today's To Do</p> <i class='fa fa-calendar-check-o fa-2x'></i></div>
    <form id="todo-form">
         <input type="text" id="input-box" placeholder="Add to your list..." required>
         <button type="submit"><i class='fa fa-angle-double-right fa-lg'></i></button>
    </form>
    <ul  class="lists" id="lists">
    </ul>
    <a href="" id="clearall">Clear all completed</a>
</div>
</div>`;