/**
 * @jest-environment jsdom
 */

import { task } from './tasks.js';

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
