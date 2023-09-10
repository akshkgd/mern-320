let todos = []
let addTaskContainer = document.getElementById('add-task');
let todosContainer = document.getElementById('todos-container')
addTaskContainer.classList.add('d-none');

function checkIfCompleted(e){
    console.log(e)

}
function taskCompleted(e){
    console.log(e)
}


function renderTodos() {
    todosContainer.innerHTML = ''
    todos.map((todo) => {
        let card = document.createElement('div');
        card.addEventListener('click', taskCompleted)
        card.classList.add('card');
        let cardFlex = document.createElement('div');
        cardFlex.classList.add('card-flex');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox')
        checkbox.addEventListener('click', checkIfCompleted)
        let taskEdit = document.createElement('input');
        taskEdit.classList.add('task-edit');
        taskEdit.value = todo.task;
        let dueDate = document.createElement('div');
        dueDate.classList.add('dueDate');
        const date = new Date(todo.dueDate);
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const fDate = date.toLocaleDateString('en', options)
        dueDate.innerText = fDate;

        todosContainer.appendChild(card);
        card.appendChild(cardFlex);
        cardFlex.appendChild(checkbox);
        cardFlex.appendChild(taskEdit)
        card.appendChild(dueDate)
    })

}


addTask = () => {
    let taskInput = document.getElementById('taskInput');
    let dateInput = document.getElementById('dateInput');

    let temptodo = {
        task: taskInput.value,
        dueDate: dateInput.value,
    }
    todos.push(temptodo)
    renderTodos();
    addTaskContainer.classList.add('d-none')
    console.log(todos)
}
displayAddTask = () => {
    addTaskContainer.classList.remove('d-none')
}



