document.querySelector('.js-btn-addTodo').addEventListener('click', addTodo);


const todoList = [];
// const todoListTxt = document.querySelector('.input-text');
// let i = 0;


renderTodoList();

function renderTodoList() {

    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        todoListHTML += `<p>${todoList[i]}</p>`;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo() {
    const inputElement = document.querySelector('.js-input');
    const todoValue = inputElement.value;
    
    todoList.push(todoValue);
    console.log(todoList);

    inputElement.value = ''; 
    renderTodoList();

    // todoListTxt.innerHTML += `${todoList[i]}, `
    // i++;
}

