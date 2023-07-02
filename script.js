import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";
(() => {


    const btn = document.querySelector('[data-form-btn]');

    //listener click
    //arrow functions o funciones anonimas
    const createTask = (evento) => {

        evento.preventDefault();
        const input = document.querySelector('[data-form-input]');
        const value = input.value;
        const list = document.querySelector('[data-list]');
        const task = document.createElement('li');
        task.classList.add('card');
        input.value = '';
        //backticks

        const taskContent = document.createElement('div');
        const tiltleTask = document.createElement('span');
        tiltleTask.classList.add("task");
        tiltleTask.innerText = value;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(tiltleTask);
        
      
        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
        list.appendChild(task);
    }

    btn.addEventListener("click", createTask);

})();