
export let cart =  JSON.parse(localStorage.getItem('cart')) ||
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

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}


export function addToCart(productId) {
    // we create this variable to verify if has item or not (undefined if not)
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
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
        productId: productId,
        quantity: quantity,
        deliveryOptionId: '1'
    })
    }
    saveToStorage();

    console.log(cart);
}

export function removeFromCart (productId) {
    cart = cart.filter((cartItem) => {
        return (!(cartItem.productId == productId));
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
        if(item.productId === productId) {
            item.quantity = newQuantity;
        }
    });

    saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
}

export function loadCart(func) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    console.log(xhr.response);
    func();
  })

  xhr.open('GET', 'https://supersimplebackend.dev/cart');
  xhr.send();
}