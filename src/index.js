import { initTodoListHandlers } from './scripts/todoList.js';
import { renderTasks } from './scripts/renderer.js';
import { getTasksList } from './scripts/tasksGateway.js';
import { setItem } from './scripts/storage.js';

import './index.scss'

document.addEventListener('DOMContentLoaded', () => {
    getTasksList()
        .then(tasksList => {
            setItem('tasksList', tasksList)
            renderTasks();
        });

    initTodoListHandlers();
});

const onStarageChange = e => {
    if (e.key === 'tasksList') {
        renderTasks();
    }
};

window.addEventListener('storage', onStarageChange);

