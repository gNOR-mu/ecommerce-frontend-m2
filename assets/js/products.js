// localstorage {id:... , quantity}
// guarda en localstorage

export const products = [
    {
        id: 0,
        price: 99990,
        title: "Mochila de expedición",
        imgSrc: "https://c.pxhere.com/photos/e1/74/backpack_hiking_backpack_hiking_mountains_forest_vietnam_nature_water_bottle-1395064.jpg!d",
        description: `
        Esta mochila de expedición está diseñada para los aventureros más exigentes. Confeccionada en Nylon de alta resistencia, garantiza durabilidad y protección contra los elementos. Su capacidad de 60 litros te permite llevar todo lo necesario para tus travesías, mientras que su diseño ergonómico asegura una distribución equilibrada del peso y un confort óptimo durante largas caminatas.

        El color azul vibrante no solo le da un toque de estilo, sino que también mejora la visibilidad en entornos naturales. Además, cuenta con múltiples compartimentos y correas ajustables para organizar tu equipo de manera eficiente. Ya sea para un trekking de varios días o una escalada desafiante, esta mochila es tu compañera ideal.`,
        shortDescription: "Mochila de expedición de 60L. Ideal para viajes largos.",
        features: [
            "Resistente al agua",
            "Color: Azul",
            "Peso: 1.5kg",
            "Material: Nylon",
            "Capacidad: 60L"
        ]
    },

    {
        id: 1,
        price: 119990,
        title: "Mountain Bike",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Orbea_Occam_2020.jpg/1024px-Orbea_Occam_2020.jpg",
        description: `
        Esta Mountain Bike está diseñada para los amantes de la aventura y la velocidad. Con un cuadro de Aluminio ligero y resistente, esta bicicleta te ofrece la agilidad y durabilidad que necesitas para conquistar cualquier sendero. Equipada con 12 piñones, te permite adaptar tu pedaleo a cualquier tipo de terreno, desde subidas empinadas hasta descensos rápidos.

Los frenos de Disco Hidráulico garantizan una frenada potente y segura en todas las condiciones climáticas, mientras que su suspensión delantera y trasera absorbe los impactos, proporcionando un viaje suave y controlado. Con un rodado de 29 pulgadas, esta bicicleta te ofrece una mayor estabilidad y tracción, ideal para explorar nuevos caminos y superar tus límites.
        `,
        shortDescription: "Bicicleta de montaña rodado 29, 12 velocidades, frenos de disco hidráulicos.",

        features: [
            "Rodado: 29",
            "Piñones: 12",
            "Material: Aluminio",
            "Frenos: Disco Hidráulico",
            "Suspensión: Delantera",
            "Peso: 11kg"
        ]

    },

    {
        id: 2,
        price: 24990,
        title: "Gafas de sol ",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Beach-sand-summer-46710.jpg/1024px-Beach-sand-summer-46710.jpg",
        description: `Estas gafas de sol están diseñadas para ofrecer la máxima protección y estilo. Con lentes de policarbonato de alta calidad, garantizan una protección UV 400, bloqueando el 100% de los rayos UVA y UVB. El material del marco, de plástico resistente y ligero, asegura un ajuste cómodo y duradero.

El diseño clásico con lentes y marco negros las convierte en un accesorio versátil que complementa cualquier atuendo, ya sea para un día casual en la ciudad o para actividades al aire libre. Además, su construcción robusta las hace ideales para el uso diario, proporcionando una visión clara y sin distorsiones.
        `,
        shortDescription: "Gafas de sol con protección UV400, lentes de policarbonato y marco de plástico.",

        features: [
            "Protección UV: 400",
            "Material del lente: Policarbonato",
            "Material del marco: Plástico",
            "Color del lente: Negro",
            "Color del marco: Negro"
        ]
    },
]

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
