// script página de productos

import { products } from "./products.js";
import { formatterCLP } from "./util.js";

const productsContainer = $("#products-container");

products.forEach(product => {
    productsContainer.append(`
    <article class="col-lg card p-0 product-card">
        <a href="productId.html?id=${product.id}" class="product-card-link">
            <img src="${product.imgSrc}" class="card-img-top product-card-img" alt="Producto destacado: ${product.title}">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.shortDescription}
                <br>
                <span><strong>${formatterCLP.format(product.price)}</strong></span>
                </p>
            </div>
        </a>
    </article>
`);
});
