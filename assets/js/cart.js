import { getProductsInCart } from "./products.js";
import { formatterCLP } from "./util.js";

const listProducts = $("#list-products")

let total = 0;

getProductsInCart().forEach(product => {
    const price = product.price * product.quantity;
    total += price;
    listProducts.append(`
        <li class="list-group-item" >
            <div class="row">
                <div class="col-md-3">${product.title}</div>
                <div class="col-md-3">${product.quantity}</div>
                <div class="col-md-3">${formatterCLP.format(product.price)}</div>
                <div class="col-md-3">${formatterCLP.format(price)}</div>
            </div>
        </li >
        `)
})

$("#total").text(formatterCLP.format(total))