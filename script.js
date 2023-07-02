const btn = document.querySelector('[data-form-btn]');


console.log(btn);

//listener click
//arrow functions o funciones anonimas
const createTask =  (evento) =>{
    console.log(evento);
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
}


btn.addEventListener("click", createTask);
