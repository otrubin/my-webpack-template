import { Promise } from "core-js";
import { renderTasks } from "./renderer.js";
import { setItem } from "./storage.js";
import { createTask, getTasksList } from "./tasksGateway.js";

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector(".task-input");

  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }
  taskTitleInputElem.value = "";

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};

let arr = [1, 2, 3, 4, 5, [6, 7]];
let arr2 = arr.flat();
console.log(arr2);

Promise.resolve().finally();
