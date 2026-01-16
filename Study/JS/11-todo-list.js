document.querySelector('.js-btn-addTodo').addEventListener('click', addTodo);

// Now it is an object Array
// Gets list from local storage or a standard text
const todoList = JSON.parse(localStorage.getItem('todoList')) || [
    {
        name: 'make dinner',
        dueDate: '2025-12-19'
    }
];


// We need a render function to always update html
renderTodoList();

function renderTodoList() {

    let todoListHTML = '';
    // We could do separating new variables like:
    // const { name, dueDate } = todoList[i];
    
    // Same as: for (let i = 0; i < todoList.length; i++) 
    todoList.forEach((value, index) => {
        // Remove o elemento da lista e depois renderiza novamente o código sem ele
        // ${todoList[i].dueDate || ''}: Pode-se utilizar || nada, caso não tenha selecionado a data. Assim não aparecendo "undefined"
        // 3 elements for the grid
        // same as: todoList[i];
        todoListHTML += `
        <p> ${value.name} </p>
        <p> ${value.dueDate || ''} </p>
        <button class="dlt-btn"> Delete </button>
        `;
    });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    
    // Give ALL the elements that have these class, and it works like a array, so we can have index
    console.log(document.querySelectorAll('.dlt-btn'));

    document.querySelectorAll('.dlt-btn').forEach((deleteBtn, index) => {
        deleteBtn.addEventListener('click', () => {
            todoList.splice(index, 1); 
            renderTodoList();
            // Whenever we update the todo list, save in localStorage.
            localStorage.setItem('todoList', JSON.stringify(todoList));
        });
    });

}


function addTodo() {
    const inputElement = document.querySelector('.js-input');
    const todoValue = inputElement.value;
    const dateInputElement = document.querySelector('.js-dueDate-input');
    const dueDateValue = dateInputElement.value;
    
    if (todoValue === 'rafa') {
            return;
        }

    todoList.push({
        name: todoValue,
        dueDate: dueDateValue
    }
    );
    console.log(todoList);

    inputElement.value = ''; 
    renderTodoList();
    
    // Whenever we update the todo list, save in localStorage.
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

