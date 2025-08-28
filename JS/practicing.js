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
    

    function toggle (event) {
        previousBtn = document.querySelector('.is-toggled');
        //se previousBtn não for null, ou seja, se houver algum, ai remove
        if(previousBtn && (previousBtn !== event.target)) {
            previousBtn.classList.remove('is-toggled');
        }
        event.target.classList.toggle('is-toggled');
     // toggle remove ou adiciona uma classe dependendo de seu estado
     }

    const gaming = document.querySelector('#gaming');
    gaming.addEventListener('click', toggle);
    // se usar toggle() ele chama na hora, a função. Já ao utilizar toggle, só faz uma referêcia a ela, facilitando que seja chamada de forma adequada e não imediatista.
    /*No contexto do addEventListener, o que esperamos é que, no momento do clique, o navegador execute a função que passamos. Se você passa toggle(), o toggle será executado assim que a linha de código for lida (ou seja, quando a página carregar), e o que será passado para o addEventListener será undefined (já que sua função toggle não retorna nada explicitamente).
    Consequentemente, nada acontecerá quando você clicar no botão
    O addEventListener precisa que você forneça uma referência à função que ele deve chamar quando o evento ocorrer. Ele é como um "gerente de eventos" que diz: "Ok, quando alguém clicar neste botão, chame ESTA função (que você me deu a referência)".*/

    const music = document.querySelector('#music');
    music.addEventListener('click', toggle);

    const tech =  document.querySelector('#tech');
    tech.addEventListener('click', toggle);


    //Arrays and Loops
    const nums = [10,20,30,112,1,0];

    nums.splice(nums.length - 1, 1, 99);
    console.log(nums)

    function getLastValue(array) {
        console.log(array[array.length -1])
    }

    getLastValue(nums);

    function arraySwap(array) {
        let last = array.pop();
        let first = array.shift();
        array.unshift(last);
        array.push(first);
    }

    arraySwap(nums);
    console.log(nums);
