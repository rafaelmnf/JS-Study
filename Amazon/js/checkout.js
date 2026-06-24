import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts } from '../data/products.js';
// import '../data/cart-class.js'; // it runs all the code inside this file, without importing anithing 
// import '../data/backend-practice.js';

loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
