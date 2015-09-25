'use strict';

module.exports = {
  $cartSummary: element(by.tagName('ngcart-summary')),
  $cartSummaryProductCount: element(by.css('[data-e2e-id="cart-summary-product-count"]')),
  $cartSummaryTotalPrice: element(by.css('[data-e2e-id="cart-summary-total-price"]')),
  $productAddedAlert: element(by.css('[data-e2e-id="product-added-alert"]')),
  $addToCartButtons: element.all(by.className('btn-primary')),
  addProductToCart: function (index) {
    this.$addToCartButtons.get(index).click();
  },
  getProduct: function (name) {
    var product = element(by.css("[name=\'" + name + "\']"));
    return {
      product: product,
      quantityOptions: product.all(by.css("option")),
      addToCartButton: product.element(by.className("btn-primary"))
      };
    }
};
