import { products } from "./products.js";

// Primeros 3 elementos
products.slice(0, 3).forEach(product => {
    $("#products-container").append(`
    <div class="col-lg card p-0">
        <img src="${product.imgSrc}" class="card-img-top product-card-img" alt="Producto destacado: ${product.title}">
        <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.shortDescription}</p>
            <a href="productId.html?id=${product.id}" class="btn btn-dark">Visitar producto</a>
        </div>
    </div>
`);
});
