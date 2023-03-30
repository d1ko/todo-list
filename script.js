const form = document.querySelector('#form');
const list = document.querySelector('#list');

form.addEventListener('submit', onFormSubmit);


function onFormSubmit (event) {
    // Предотвращаем поведение по умолчанию, 
    // а именно перезагрузку страницы
    event.preventDefault();
    // Ссылка на форму
    const formElement = event.target;

    // Ссылка на текстовое поле
    const inputElement = formElement.text;

    // Название будущей задачи
    const todoName = inputElement.value;

    // Создание новой задачи
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo')
    newTodo.innerHTML = `
        <div>
            <span class='todo-name'>${todoName}</span>
            <button class="delete-btn"></button>
            <button class="edit-btn"></button>
        </div>
    `;

    // eding in DOM new task
    list.appendChild(newTodo);
    const task = Array.from(list.children).find(el => el === newTodo);
    task.addEventListener('click', (e) => {
        const isDeleteBtn = e.target.classList.toString() === 'delete-btn';
        const isEditBtn = e.target.classList.toString() === 'edit-btn';
        if (isDeleteBtn) onTaskDelate(task);
        if (isEditBtn) onTaskEdit(task);
    });

    // Очистка текстового поля после
    inputElement.value = '';

    function onTaskDelate(task){
        task.remove();
    }
    function onTaskEdit(task){
        const newTodoName = prompt('write new name of task');
            const isValid = newTodoName.length > 3 && newTodoName.length < 20;
            if (isValid) {
                const span = task.querySelector('.todo-name');
                span.innerHTML = newTodoName; 
            } else alert("change your name");
    }
}