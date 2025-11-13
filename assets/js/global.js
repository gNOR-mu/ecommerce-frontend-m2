import { getTotalProductsInCart } from "./products.js";

export function updateProductTotal() {
    const productTotal = $("#product-total");
    const totalProducts = getTotalProductsInCart();
    productTotal.text(totalProducts);
}

$("#header-placeholder").load("components/header.html", function () {
    $("#footer-placeholder").load("components/footer.html");
    updateProductTotal();
});

$(document).on("cartUpdated", updateProductTotal);
