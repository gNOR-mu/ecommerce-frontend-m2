import { getTotalProductsInCart } from "./productUtil.js";

export function updateProductTotal() {
    const productTotal = $("#product-total");
    const totalProducts = getTotalProductsInCart();
    productTotal.text(totalProducts);
}

const actualPath = window.location.pathname;


$("#header-placeholder").load("components/header.html", function () {
    $("#footer-placeholder").load("components/footer.html");
    updateProductTotal();

    // cambia el color de la pestaña en el navbar según la página
    if (actualPath.includes("index.html") || actualPath === "/" || actualPath === "https://gnor-mu.github.io/ecommerce-frontend-m2/") { //inicio
        $("#nav-index").addClass("text-white")

    } else if (actualPath.includes("product.html")) { //productos
        $("#nav-product").addClass("text-white")

    } else if (actualPath.includes("contact.html")) { //contacto
        $("#nav-contact").addClass("text-white")
    }

});

$(document).on("cartUpdated", updateProductTotal);
