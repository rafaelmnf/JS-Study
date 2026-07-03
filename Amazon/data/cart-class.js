
class Cart {
    cartItems; // Same as cartItems = undefined;
    // It has to be Private = can only be accessed inside the class. # --> Means it is private property
    #localStorageKey;

    // When creating another object, it runs automatically
    constructor(localStorageKey) {
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
    }

    // "this" give us the object name that we are using
    #loadFromStorage() { // Doing it is the same as if we've done #loadFromStorage: function() {}
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) ||
        [ 
            {
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 3,
            deliveryOptionId: '1'
            },
            {
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 2,
            deliveryOptionId: '2'
            }   
        ];
    }

    saveToStorage() {
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }
    
    addToCart(productId) {
        // we create this variable to verify if has item or not (undefined if not)
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        })

        // We have to convert the string value from DOM to a number
        const quantitySelector = document.querySelector(
        `.js-quantity-selector-${productId}`);
        
        const quantity = quantitySelector ? Number(quantitySelector.value) : 1;

        if(matchingItem) {
            matchingItem.quantity += quantity;
        } else {
            this.cartItems.push({
            productId: productId,
            quantity: quantity,
            deliveryOptionId: '1'
        })
        }
        this.saveToStorage();

        console.log(this.cartItems);
    }

    removeFromCart (productId) {
    this.cartItems = this.cartItems.filter((cartItem) => {
        return (!(cartItem.productId == productId));
    })
    this.saveToStorage();
    }

    calculateCartQuantity() {
        let cartQnt = 0;
        this.cartItems.forEach((cartItem) => {
            cartQnt += cartItem.quantity;
        })
        return cartQnt;
    }

    updateQuantity(productId, newQuantity) {
        this.cartItems.forEach((item) => {
            if(item.productId === productId) {
                item.quantity = newQuantity;
            }
        });

        this.saveToStorage();
    }

    updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });

        matchingItem.deliveryOptionId = deliveryOptionId;
        this.saveToStorage();
    }

}

const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');

cart.addToCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
console.log(cart);
// check if it belongs to that class
console.log(businessCart instanceof Cart)
