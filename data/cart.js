export const cart = [];

export function addToCart(productId) {
    let selectedQuntity = parseInt(document
        .querySelector(`.js-quantity-selector-${productId}`)
        .value
    );
    let matchingItem;
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += selectedQuntity;
    }

    else {
        cart.push({
            productId: productId,
            quantity: selectedQuntity,
        })
    }
}