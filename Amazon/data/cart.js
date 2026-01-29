
export let cart =  JSON.parse(localStorage.getItem('cart')) ||
[ 
    {
    productID: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 3
    },
    {
    productID: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 2
    }   
];

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}


export function addToCart(productId) {
    // we create this variable to verify if has item or not (undefined if not)
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productID) {
            matchingItem = cartItem;
        }
    })

    // We have to convert the string value from DOM to a number
    const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`);
    const quantity = Number(quantitySelector.value);

    if(matchingItem) {
        matchingItem.quantity += quantity;
    } else {
        cart.push({
        productID: productId,
        quantity: quantity
    })
    }
    saveToStorage();

    console.log(cart);
}

export function removeFromCart (productId) {
    cart = cart.filter((cartItem) => {
        return (!(cartItem.productID == productId));
    })
    saveToStorage();
}

export function calculateCartQuantity() {
    let cartQnt = 0;
    cart.forEach((cartItem) => {
        cartQnt += cartItem.quantity;
    })
    return cartQnt;
}

export function updateQuantity(productId, newQuantity) {
    cart.forEach((item) => {
        if(item.productID === productId) {
            item.quantity = newQuantity;
        }
    });

    saveToStorage();
}