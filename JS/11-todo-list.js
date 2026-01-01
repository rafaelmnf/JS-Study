document.querySelector('.js-btn-addTodo').addEventListener('click', addTodo);

// Now it is an object Array
const todoList = [
    {
        name: 'make dinner',
        dueDate: '2025-12-19'
    }
];

// const todoListTxt = document.querySelector('.input-text');
// let i = 0;


// We need a render function to always update html
renderTodoList();

function renderTodoList() {

    let todoListHTML = '';
    // We could do separating new variables like:
    // const { name, dueDate } = todoList[i];
    for (let i = 0; i < todoList.length; i++) {
        // Remove o elemento da lista e depois renderiza novamente o código sem ele
        // ${todoList[i].dueDate || ''}: Pode-se utilizar || nada, caso não tenha selecionado a data. Assim não aparecendo "undefined"
        // 3 elements for the grid
        todoListHTML += `
        <p> ${todoList[i].name} </p>
        <p> ${todoList[i].dueDate || ''} </p>
        <button class="dlt-btn" onclick = "
            todoList.splice(${i}, 1); 
            renderTodoList();
        ">Delete</button>
        `;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo() {
    const inputElement = document.querySelector('.js-input');
    const todoValue = inputElement.value;
    const dateInputElement = document.querySelector('.js-dueDate-input');
    const dueDateValue = dateInputElement.value;
    
    todoList.push({
        name: todoValue,
        dueDate: dueDateValue
    }
    );
    console.log(todoList);

    inputElement.value = ''; 
    renderTodoList();

    // todoListTxt.innerHTML += `${todoList[i]}, `
    // i++;
}

