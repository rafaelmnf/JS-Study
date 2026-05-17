import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import '../data/cart-oop.js'; // it runs all the code inside this file, without importing anithing 

renderOrderSummary();
renderPaymentSummary();