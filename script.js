(()=>{
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
    const content = `  
   <i class = 'fas fa-trash-alt trashIcon icon'></i> `;
 // task.innerHTML = content;
 task.appendChild(taskContent);
  list.appendChild(task);
}


btn.addEventListener("click", createTask);

const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);
     return i;
};

const completeTask = (event)=>{
   
    const element = event.target;
    element.classList.toggle('fas');   
    element.classList.toggle('far');
    element.classList.toggle('completeIcon');
};
}) ();