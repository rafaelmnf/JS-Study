document.getElementById("rock").addEventListener("click", () => playGame('rock'));
document.getElementById("paper").addEventListener("click", () => playGame('paper'));
document.getElementById("scissors").addEventListener("click", () => playGame('scissors'));
document.getElementById('resetScore').addEventListener('click', () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    
    localStorage.removeItem('score');
    //The score now is null
});

/* Ao uma função sem parâmetros, usamos o evento click, e logo a referência da função, a qual
 o objeto event é chamado automaticamente. Como é referência, não pode passar parâmetros na função chamada
 document.querySelector('.js-btn-addTodo').addEventListener('click', addTodo);

 Já aqui, onde passamos um parâmetro para a função chamada, logo ao clicar, o navegador executa a arrow function e dentro dela, chama a função playGame passando os parâmetros.
 document.getElementById("rock").addEventListener("click", () => playGame('rock')); 
/*
    
//The getItem method gets a value out of a localStorage
let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

/*score = null === !score
if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
}
*/
function randomNum() {
    const randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if(randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    return computerMove; // Retorna o valor, o qual será usado nas proximas funções
}

function playGame(playerMove) {
    const computerMove = randomNum();

    //Aqui será guardado o resultado para que ele possa ser mostrado na tela
    let result = '';

    if(playerMove === 'rock'){
        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'You lose';
        } else {
            result = 'You win';
        }

    } else if (playerMove === 'paper'){
        if (computerMove === 'rock') {
            result = 'You win';
        } else if (computerMove === 'paper') {
            result = 'Tie';
        } else {
            result = 'You lose';
        }

    } else {
        if (computerMove === 'rock') {
            result = 'You lose';
        } else if (computerMove === 'paper') {
            result = 'You win';
        } else {
            result = 'Tie';
        }
    }

    if (result === 'You win'){
        score.wins ++;
    } else if (result === 'Tie'){
        score.ties ++;
    } else if (result === 'You lose') {
        score.losses ++;
    }

    //localStorage only supports strings, thats why we use JSON.stringify
    localStorage.setItem('score', JSON.stringify(score));
    //the first thing inside the parentheses is the name, it is the "variable" to access later
    //the second thing is the value, what is gonna be stored

    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} \n Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}


// // In splice, the first is the index we want to remove, and the second is the number of values to remove, starting at the index
        // myArray.splice(0, 2);
        // console.log(myArray);
        // OBS* The third ',', you can add elements directly in the array:
        // let arr = [1, 2, 3, 4];
        // arr.splice(1, 2, 9, 10); --> [1, 9, 10, 4]

/* 
Short Cuts for Objects:

const object4 = {
  message: 'Good job!'
};
 // const message = object4.message;
 //is the same as:
 const { message, price } = object4;
 // it is called destructing, when you call a property of an object, it returns the value of that property with the exact name
 console.log(message);
 console.log(price);

//ShortHand method:
const object5 = {
 message, 
 method() {
  console.log('method');
 }
};
object5.method()


Copy by Reference
// In JavaScript, when you assign an object to a new variable, you are not creating a copy of the object. Instead, you are creating a new reference to the same object. This is known as "copy by reference".
EX: const object1 = {
 name: 'John'
};
const object2 = object1;
// The object2 points to the same object as object1. Think as a space in memory that is reserved to store the object.


//Properties and methods (AutoBoxing):
console.log('hello'.length);
console.log('hello'.toUpperCase());
console.log('hello'.toLowerCase());
console.log(3.0.toString())
const resultado = palavra.repeat(repeticoes); -> console.log(resultado); // "testtest"


LocalStorage -> save values more permanently, diferrently than variables that is temporary

JSON Built-in Object:
convert JSO -> JSON

JSON = JavaScript Object Notation
 - is a similar to JS object, but with less features
{
   "name": "shirt",
   "delivery-time": "1 day",
   ...
}
JSON can be used in almost every programming language
 - so we use JSON to send data between servers and clients

 console.log(JSON.stringfy(product2));
 //this will convert the JS object into a JSON string
 
 // this converts a json string to a JS object
 const jsonString = JSON.stringify(product2);
 console.log(JSON.parse(jsonString));

Objects:
    const product = {
    name: '',
    price: 1090,
    ['delivery-time']: '1 day'
};
product.name = 'Smartphone';
console.log(product.name)
product.newProperty = true;
console.log(product);

delete product.newProperty;
console.log(product);

we use [], when we have, for example (-, variable):
console.log(product['delivery-time']);

we also can use objects inside other objects (nested objects) and functions:
const product2 = {
    name: '',
    price: 1090,
    'delivery-time': '1 day',
    rating: {
        stars: 4.5,
        count: 87
    }, 
    fun: function function1() {
        console.log('function inside object');
    }
};
console.log(product2.rating.count)
product2.fun(); //when we save a function inside an object it will run the function
EX: using console.log(), you are already using this method -> console is the object and log is the function
    Math.random() is the same thing
*/

/*Falsy Values -> false, 0, '', null, undefined, NaN
Any value not on this list IS TRUTHY
    EX: if(0) {
        console.log('truthy');
    } //it wont appear on the console because 0 is a falsy value

    EX: 
    const cartQuantity = 5;

    if(cartQuantity) {
        console.log('cart has products')
    }

    NaN (Not a Number) --> 'text'/5
    undefined --> something doesn't have a value --> let variable; console.log(variable);
*/

/*Ternary Operator ?: 
    const result = condition ? 'value_if_true' : 'value_if_false'; //
    console.log(result); 
    if condition is true, result will be 'value_if_true', otherwise it will be 'value_if_false'.
--> SHORTCUT if(true){
    'value_if_true'
} else {
    'value_if_false'
}
*/

/*Parameters:
    function calculateTax(cost, tax) {
    console.log(cost * tax);
    }

    calculateTax(2000, 0.1);
*/

/*Exercises: 
let userName ;
function greet(userName) {
    if(!userName){
        console.log('Hi there');
    } else{
        console.log(`Hello! ${userName}`);
    }
}
greet(userName);

function convertTemperature(degrees, unit) {
    if (unit === 'C') {
        let temp = ""
        temp = (degrees * 9/5) + 32;
        console.log(temp + 'F');
    } else if (unit === 'F') {
        temp = (degrees - 32) * 5/9;
        console.log(temp + 'C');
    }
}
convertTemperature(30, 'C');
*/
