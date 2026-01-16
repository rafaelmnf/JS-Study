import { products } from "../data/products.js";
import { cart } from "../data/cart.js";

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
                src="images/ratings/rating-${product.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                $${(product.priceCents / 100).toFixed(2)}
            </div>

            <div class="product-quantity-container">
                <select>
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

            <div class="added-to-cart">
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

// product-id == productId, o DOM junta na hora de identificá-lo como objeto

document.querySelector('.products-grid').innerHTML = productsHtml;

// make a list of all btns with that class, then iterates for all btn to when clicking, do something
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        // DATASET gives us all the data attributes of button
        console.log(button.dataset);
        const productID = button.dataset.productId

        // we create this variable to verify if has item or not (undefined if not)
        let matchingItem;

        cart.forEach((item) => {
            if (productID === item.productID) {
                matchingItem = item;
            }
        })

        if(matchingItem) {
            matchingItem.quantity ++;
        } else {
            cart.push({
            productID: productID,
            quantity: 1
        })
        }
        
        console.log(cart);

        let cartQnt = 0;

        cart.forEach((item) => {
            cartQnt += item.quantity;
        })

        document.querySelector('.cart-quantity').innerHTML = cartQnt;
    });
});

/* DATA ATTRIBUTE -> how do we know which product to add:
    allows us to attach any information to an element

    data-"name" = value
*/