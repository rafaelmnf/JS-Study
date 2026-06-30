import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
// import '../data/cart-class.js'; // it runs all the code inside this file, without importing anithing 
// import '../data/backend-practice.js';

// *Async is a shortcut for promises
// async makes a function return a promise

async function loadPage() {
    console.log('load page');

    // await: lets us wait for a promise to finish, before going to next line
    await loadProductsFetch(); // Vai esperar acabar a promise antes de ir para a proxima linha 
    // We can oly use await while inside an async function 

    const resolved = await new Promise((resolve) => {
        loadCart(() => {
            resolve('value3');
        });
    })//.then((value) = {}) -> instead of doing .then, await returns the value inside resolve

    renderOrderSummary();
    renderPaymentSummary();

    return 'value2'; // same as if we did resolve('value2');
}
loadPage().then((value) => {
    console.log('next step')
    console.log(value);
})

/** The code above is same as:
    function loadPage() {
        // HERE is like creating "async"
        return new Promise((resolve) => {
            console.log('load page');
            resolve();

        }).then(() => {
                return loadProductsFetch();
            }).then(() => {
                return new Promise((resolve) => {
                    resolve('value2');
                });
        })/
    }   
*/ 


/*
    // We saw promises, to understand how async and await works
    // Promises: Let us wait for some code to finish, before going to the next step
    // When we create this promise it will run the function inside immediately
    new Promise((resolve) => { // resolve is a function that let us control when to go to next step
        console.log('start promise')
        loadProducts(() => {
            console.log('finished loading')
            resolve(); // Quando carregar os produtos, ai roda a callback function, que vai para o .then dps
            // resolve controla quando ir para o then
        })
    }).then(() => {
        console.log('next step');
    })

    // Promise.all: lets us run multiple promises at the same time and wait for all to finish
    Promise.all([
        loadProductsFetch(),
        new Promise((resolve) => {
            loadCart(() => {
                resolve();
            })
        })
    ]).then((values) => {  // values are saved in a array
        console.log(values);
        renderOrderSummary();
        renderPaymentSummary();
    });

/*


/**
    // Its like organizing the code by steps 
    new Promise((resolve) => {
        loadProducts(() => {
            resolve('value1'); // podemos passar valores entre os resolves
        });

    }).then((value) => {
        return new Promise((resolve) => {
            loadCart(() => {
                resolve();
            })
        }); 

    }).then(() => {
        renderOrderSummary();
        renderPaymentSummary();
    })
 */



/* Using Callbacks starts to produce bad code, as it results in nest inside nest
    loadProducts(() => {
        loadCart(() => {
            renderOrderSummary();
            renderPaymentSummary();
        })
        
    });
*/

