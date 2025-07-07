/*const product1 = {
    name: "basketball",
    price: 2095,
    'delivery-time': '3 days'
};

const product2 = {
    name: "basketball",
    price: 1995
}

product2.price += 100;
console.log(product1); 

function comparePrice(p1, p2) {
    if(p1.price > p2.price) {
        console.log(p1.price);
    } else {
        console.log(p2.price);
    }
}

function isSameProduct(p1, p2) {
    if(p1.name === p2.name && p1.price === p2.price) {
        console.log(true);
    } else {
        console.log(false);
    }
}

isSameProduct(product1, product2);
comparePrice(product1, product2);
*/

        /*console.log(document.querySelector('button').innerHTML);
        document.querySelector('.js-b9b').innerHTML = '9b done!';
        function play(coin) {
            if(coin === 'heads'){
                document.querySelector('.hort').innerHTML = 'You chose: heads';
            } else{
                document.querySelector('.hort').innerHTML = 'You chose: tails';
            }
        }*/
        function submit(){
            const text = document.querySelector('.js-name').value;
            document.querySelector('.js-display-name').innerHTML = `Your name is: ${text}`;
        }
        function submitEnter(event){
            if(event.key === 'Enter'){
            submit();
            }
        }

    const button = document.querySelector('.js-button');
    console.log(button.classList.contains('js-button'));

    const on_off = document.querySelector('.toggle');
    
    document.getElementByClass