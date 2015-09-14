'use strict';

module.exports = {
  $cartProducts: element.all(by.css('[data-e2e-id="cart-product"]')),
  decreaseProductQuantity: function (index) {
    this.$cartProducts.element(by.css('[data-e2e-id="cart-product-decrease-quantity"]')).click();
  },
  increaseProductQuantity: function (index) {
    this.$cartProducts.get(index).element(by.css('[data-e2e-id="cart-product-increase-quantity"]')).click();
  },
  $cartProductTotalPrice: element(by.css('[data-e2e-id="cart-product-total-price"]')),
  $cartRemoveProductsButton: element.all(by.css('[data-e2e-id="cart-remove-product"]')),
  removeProductFromCart: function (index) {
    this.$cartRemoveProductsButton.get(index).click();
  },
  $cartTotalPrice: element(by.css('[data-e2e-id="cart-total-price"]'))
};
