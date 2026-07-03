import { cart, calculateCartQuantity } from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOptions.js';
import { formatCurrency } from '../utils/util.js';
import { addOrder } from '../../data/orders.js'; 

export function renderPaymentSummary() {
    let productPriceCents = 0;
    let shippingPriceCents = 0;
    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPriceCents += product.priceCents * cartItem.quantity;

        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingPriceCents += deliveryOption.priceCents;
    })

    const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
    // 10% tax
    const taxCents = totalBeforeTaxCents * 0.1;
    const totalCents = totalBeforeTaxCents + taxCents;
    const cartQuantity = calculateCartQuantity();

    const paymentSummaryHTML = `
        <div class="payment-summary-title">
        Order Summary
        </div>

        <div class="payment-summary-row">
        <div>Items (${cartQuantity}):</div>
        <div class="payment-summary-money">
          $${formatCurrency(productPriceCents)}
        </div>
        </div>

        <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">
          $${formatCurrency(shippingPriceCents)}
        </div>
        </div>

        <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">
          $${formatCurrency(totalBeforeTaxCents)}
        </div>
        </div>

        <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">
          $${formatCurrency(taxCents)}
        </div>
        </div>

        <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">
          $${formatCurrency(totalCents)}
        </div>
        </div>

        <button class="place-order-button button-primary js-place-order">
        Place your order
        </button>
    `;
    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

    document.querySelector('.js-place-order').addEventListener('click', async () => {
      try{
        const response = await fetch('https://supersimplebackend.dev/orders', {
          method: 'POST', 
          headers: { // headers gives the backend more information about the request
            'Content-Type': 'application/json' //This tells the back what type of data we are sending to 
          }, 
          body: JSON.stringify({ // This is the actual data we are sending, we have to convert it too JSON
            cart: cart
          })
        })

        const order = await response.json();
        console.log(order);

        addOrder(order);
        
      } catch (error) {
        console.log('Unexpected error. Try again later')
      }

      // isso controla o URL do browser
      window.location.href = 'orders.html' // isso substitui o que vem depois de localhost/
      
    });
}