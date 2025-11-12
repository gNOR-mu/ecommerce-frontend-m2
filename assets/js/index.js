import { products } from "./products.js";


products.forEach(product => {
    const description = product.description.length > 80 ? product.description.substring(0, 80) + "..." : product.description;

    $("#products-container").append(`
    <div class="col-lg card p-0">
        <img src="${product.imgSrc}" class="card-img-top product-card-img" alt="Producto destacado: ${product.title}">
        <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${description}</p>
            <a href="${product.link}" class="btn btn-primary">Visitar producto</a>
        </div>
    </div>
`);
});
