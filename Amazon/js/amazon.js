// '..' goes outside the current folder
import { products } from "../data/products.js";
import { cart, addToCart, calculateCartQuantity } from "../data/cart.js";
import { formatCurrency } from "./utils/util.js";

/** If we use POO, we could do:
    import * as cartObject from '../data/products.js';
    cartModule.cart
    cartModule.addToCart('id');
 */

let productsHtml = '';

products.forEach((product) => {
    productsHtml += `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                src="${product.getStarsUrl()}">
                <div class="product-rating-count link-primary">
                ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                ${product.getPrice()}
            </div>

            <div class="product-quantity-container">
                <select class="js-quantity-selector-${product.id}">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart js-added-to-cart-${product.id}">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-id="${product.id}">
                Add to Cart
            </button>
        </div>
    `;
})

document.querySelector('.products-grid').innerHTML = productsHtml;

function updateCartQuantity() {
    document.querySelector('.js-cart-quantity').innerHTML = calculateCartQuantity();
}
updateCartQuantity();


const addedMessageTimeouts = {};

function showAddedMessage(productId) {

    const addedHTML = document.querySelector(`.js-added-to-cart-${productId}`);
    addedHTML.classList.add('added-show');

    // When selecting by [], you get the content of variable
    const previousTimeoutId = addedMessageTimeouts[productId];
    // undefined or the number of timeoutId
    if (previousTimeoutId) {
    clearTimeout(previousTimeoutId);
      }

    // gets the id number of that timeout (every click new timerId)
    const timeoutId = setTimeout(() => {
        addedHTML.classList.remove('added-show');
    }, 2000);

    // Save the timeoutId for this product
    // so we can stop it later if we need to.
    // addedMessageTimeouts = { 
    // "e43638ce-6aa0-4b85-b27f-e1d07eb678c6": 17
    // };
    // Using'[]' instead of '.' because it is a variable
    addedMessageTimeouts[productId] = timeoutId;
}


// make a list of all btns with that class, then iterates for all btn to when clicking, do something
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {

        // DATASET gives us all the data attributes of button, we use it to specify which button we are using
        console.log(button.dataset);
        // product-id == productId, o DOM junta na hora de identificá-lo como objeto
        const productId = button.dataset.productId;

        addToCart(productId);

        updateCartQuantity(); 

        showAddedMessage(productId);
    });
});

/* DATA ATTRIBUTE -> how do we know which product to add:
    allows us to attach any information to an element

    data-"name" = value
*/