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
  $selectProductQuantity: element(by.css('#quantity option')),
  $selectProduct: element(by.repeater('product in ctrl.products')),
  addProductWithQuantityToCart: function (product, quantity) {
    this.$selectProduct.get(product).$selectProductQuantity.get(quantity).click();
  }
};
