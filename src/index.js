import './style.css';
import addTask from './modules/addRemove.js';
import {
  toggleTask,
  taskDesc,
  list,
  navList,
  clearCompleted,
} from './modules/listUtils.js';

// Add event listeners
taskDesc.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

const publish = document.getElementById('publish');
publish.addEventListener('click', addTask);

const clearChecked = document.getElementById('footer');
clearChecked.addEventListener('click', clearCompleted);

// Export the necessary functions and variables
export {
  toggleTask, taskDesc, list, navList,
};

list();
