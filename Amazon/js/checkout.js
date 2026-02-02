import { cart, removeFromCart, calculateCartQuantity, updateQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/util.js";
import { deliveryOptions } from "../data/deliveryOptions.js";

// External Library -> When doing something complicated, search for an external library first
// Don't have curly brackets beacuse it is a default export
import  dayjs  from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

const today = dayjs();
const deliveryDate = today.add(7, 'days');
console.log(deliveryDate.format('dddd, MMMM D'));

let cartSummaryHTML = '';

cart.forEach((cartItem) => {

  // Gets product from cart item id
  let matchingProduct;
  products.forEach((product) => {
      if (product.id === cartItem.productID) {
          matchingProduct = product;
      }
  });

  let deliveryOption;
  deliveryOptions.forEach((option) => {
    if (option.id === cartItem.deliveryOptionId) {
      deliveryOption = option;
    }
  });

  const today = dayjs();
  const deliveryDate = today.add(deliveryOption.deliveryDays, 'days').format('dddd, MMMM D');

  cartSummaryHTML += `   
        <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
          <div class="delivery-date">
            Delivery date: ${deliveryDate}
          </div>

          <div class="cart-item-details-grid">
            <img class="product-image"
              src="${matchingProduct.image}">

            <div class="cart-item-details">
              <div class="product-name">
                ${matchingProduct.name}
              </div>
              <div class="product-price">
                ${formatCurrency(matchingProduct.priceCents)}
              </div>
              <div class="product-quantity">
                <span>
                  Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary js-update-quantity-link-${matchingProduct.id}" data-product-id="${matchingProduct.id}">
                  Update
                </span>
                <input class="quantity-input js-quantity-input-${matchingProduct.id}">
                <span class="save-quantity-link link-primary js-save-quantity-link-${matchingProduct.id}" data-product-id="${matchingProduct.id}">Save</span>
                <span class="delete-quantity-link link-primary js-delete-link"
                data-product-id="${matchingProduct.id}">
                  Delete
                </span>
              </div>
            </div>

            <div class="delivery-options">
              <div class="delivery-options-title">
                Choose a delivery option:
              </div>
              ${deliveryOptionsHTML(matchingProduct, cartItem)}
            </div>
          </div>
        </div>
      `;
});

function deliveryOptionsHTML(matchingProduct, cartItem) {
  let htmlOptions = '';

  deliveryOptions.forEach((option) => {
    const today = dayjs();
    const deliveryDate = today.add(option.deliveryDays, 'days').format('dddd, MMMM D');

    const priceString = option.priceCents === 0 ? 'FREE' : `$${formatCurrency(option.priceCents)} - `;
    const isChecked = option.id === cartItem.deliveryOptionId;

    htmlOptions += `
      <div class="delivery-option">
        <input type="radio"
          ${isChecked ? 'checked' : ''}
          class="delivery-option-input"
          name="delivery-option-${matchingProduct.id}">
        <div>
          <div class="delivery-option-date">
            ${deliveryDate}
          </div>
          <div class="delivery-option-price">
            ${priceString} Shipping
          </div>
        </div>
      </div>
      `
  });
  return htmlOptions;
}

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-link').forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);

      // removing from DOM with remove(), or we could also create a function to load HTML cart and refresh it everytime we add or delete a product
      document.querySelector(`.js-cart-item-container-${productId}`).remove();
      updateCartQuantity();
      console.log(cart);
    });
});
  
  
  function updateCartQuantity() {
    let totalQuantity = calculateCartQuantity();
    document.querySelector('.js-checkout-quantity').innerHTML = `${totalQuantity} items`;
  }

  updateCartQuantity();

document.querySelectorAll('.update-quantity-link').forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
    document.querySelector(`.js-cart-item-container-${productId}`).classList.add('is-editing-quantity')
  });
});

document.querySelectorAll('.update-quantity-link').forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
    document.querySelector(`.js-cart-item-container-${productId}`).classList.add('is-editing-quantity');
    document.querySelector(`.js-update-quantity-link-${productId}`).classList.add('js-display-none');
    document.querySelector(`.js-quantity-label-${productId}`).classList.add('js-display-none');
  });
});


document.querySelectorAll('.save-quantity-link').forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
    document.querySelector(`.js-cart-item-container-${productId}`).classList.remove('is-editing-quantity');
    document.querySelector(`.js-save-quantity-link-${productId}`).classList.add('js-display-none');
    document.querySelector(`.js-update-quantity-link-${productId}`).classList.remove('js-display-none');
    document.querySelector(`.js-quantity-label-${productId}`).classList.remove('js-display-none');

    const quantityInput = document.querySelector(
        `.js-quantity-input-${productId}`
      );
    const newQuantity = Number(quantityInput.value);
    updateQuantity(productId, newQuantity);

    const quantityLabel = document.querySelector(
        `.js-quantity-label-${productId}`
    );
    quantityLabel.innerHTML = newQuantity;

    updateCartQuantity();
    
  });
});