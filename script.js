const btn = document.querySelector('[data-form-btn]');


console.log(btn);

//listener click
//arrow functions o funciones anonimas
const createTask = (evento) => {
    console.log(evento);
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = "";
    const content = ` <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div>`;
  task.innerHTML = content;
  list.appendChild(task);

    console.log(content);
}


btn.addEventListener("click", createTask);
