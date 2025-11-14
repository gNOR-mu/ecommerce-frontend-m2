
export const products = await $.getJSON("assets/data/products.json");

//obtiene el numero total de productos en carrito
export function getTotalProductsInCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.reduce((total, product) => total + product.quantity, 0);
}
//obtiene todos los productos
export function getProductsInCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.map(cartProduct => {
        const productDetail = products.find(p => p.id === cartProduct.id);
        return { ...productDetail, quantity: cartProduct.quantity };
    });
}

// Agrega un producto a localstorage, de 1 en 1
export function addProduct(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(p => p.id === product.id);
    if (productIndex > -1) {
        cart[productIndex].quantity++;
    } else {
        cart.push({ id: product.id, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    document.dispatchEvent(new Event('cartUpdated'));

}

// Resta un producto de localstorage, de 1 en 1
export function subtractProduct(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(p => p.id === id);
    if (productIndex === -1) {
        return
    }

    cart[productIndex].quantity--;
    if (cart[productIndex].quantity === 0) {
        cart.splice(productIndex, 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    document.dispatchEvent(new Event('cartUpdated'));
}

// elimina completamente un producto de localstorage
export function removeProduct(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(p => p.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
}


//obtiene quantity de un producto
export function getProductQuantity(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = cart.find(p => p.id === id);
    return product ? product.quantity : 0;
}
