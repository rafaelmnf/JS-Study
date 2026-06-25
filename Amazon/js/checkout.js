import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
// import '../data/cart-class.js'; // it runs all the code inside this file, without importing anithing 
// import '../data/backend-practice.js';

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
    loadProductsFetch,
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        })
    })
]).then((values) => { 
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});


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

