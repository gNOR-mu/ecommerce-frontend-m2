import { addProduct, getProductQuantity, products, subtractProduct } from "./products.js";
import { formatterCLP } from "./util.js";



// obtiene la id de search param
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// busca en products
const product = products.find(p => p.id == productId);

// Si el producto no existe, redirige a la página principal
if (!product || !`product.id`) {
    alert("Producto no encontrado, redirigiendo al inicio")
    window.location.href = '.';
}

// Cambio el título de la página por el titulo del elemento
$(document).prop('title', product.title);

// Muestra la info del producto

$("#productTitle").text(product.title);
$("#producPrice").text(formatterCLP.format(product.price));
$("#productDesciption").text(product.description);
$("#productShorDescription").text(product.shortDescription);

const imgProduct = $("#imgProduct");
imgProduct.attr("src", product.imgSrc)
imgProduct.attr("alt", "Producto")


const ulFeatures = $("#ulFeatures");
product.features.forEach(feature => {
    ulFeatures.append(`<li>${feature}</li>`)
})

const btnAdd = $("#btn-add")
const btnRemove = $("#btn-remove")
const quantity = $("#product-quantity")
quantity.text(getProductQuantity(product.id))

if (quantity.text() <= 0) {
    btnRemove.attr("disabled", "true")
}

btnAdd.click(function () {
    addProduct(product)

    const newQuantity = getProductQuantity(product.id)
    quantity.text(newQuantity)

    if (newQuantity > 0) {
        btnRemove.removeAttr("disabled")

    }
})

btnRemove.click(function () {
    subtractProduct(product.id)
    const newQuantity = getProductQuantity(product.id)

    quantity.text(newQuantity)
    if (newQuantity <= 0) {
        btnRemove.attr("disabled", "true")
    }

})
