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
    
    //  exercise 11m
    let nums = [1,2,-21,-4,4];
    
    function minMax(nums) {
        // if array has more than just one element, than, show them to the user, otherwise, shows a error message
        if(nums.length > 1){
        /* if we inicialize the min and max as the first index of the array, it will be always a number of the array or none.
        */
        const result = {
            min: nums[0],
            max: nums[0]
        }
        
        for(let i=0; i < nums.length; i++) {
            if (result.min > nums[i]){
                result.min = nums[i];
            }

            if (result.max < nums[i]){
                result.max = nums[i];
            }

        }

            console.log(result);
            return result;

            } else {
                console.log('error');
            }
    
    }


    minMax(nums);
