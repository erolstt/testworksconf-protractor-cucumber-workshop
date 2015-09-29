'use strict';

module.exports = {
  $cartSummaryProductCount: element(by.css('[data-e2e-id="cart-summary-product-count"]')),
  getProduct: function (name) {
    var product = element(by.css("[name=\'" + name + "\']"));
    return {
      product: product,
      quantityOptions: product.all(by.css("option")),
      addToCartButton: product.element(by.className("btn-primary"))
      };
    }
};
