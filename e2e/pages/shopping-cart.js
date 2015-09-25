'use strict';

module.exports = {
  increaseProductQuantity: function (index) {
    this.$cartProducts.get(index).element(by.css('[data-e2e-id="cart-product-increase-quantity"]')).click();
  },
  $cartProductTotalPrice: element(by.css('[data-e2e-id="cart-product-total-price"]')),
  $cartRemoveProductsButton: element.all(by.css('[data-e2e-id="cart-remove-product"]')),
  removeProductFromCart: function (index) {
    this.$cartRemoveProductsButton.get(index).click();
  },
  $cartTotalPrice: element(by.css('[data-e2e-id="cart-total-price"]')),
  getProduct: function (index) {
    var product = element.all(by.css('[data-e2e-id="cart-product"]')).get(index);
    return {
      product: product,
      name: product.element(by.css("[data-e2e-id='cart-product'] td:nth-child(2)")),
      quantity: product.element(by.css("[data-e2e-id='cart-product'] td:nth-child(3)")),
      totalPrice: product.element(by.css("[data-e2e-id='cart-product'] td:nth-child(5)"))
    };
  },
  $cartProducts: element.all(by.css('[data-e2e-id="cart-product"]')),
  decreaseProductQuantity: function (quantity, index) {
    var count = quantity;
    var product = this.$cartProducts.get(index);

    while (count > 0) {
      product.element(by.css('[data-e2e-id="cart-product-decrease-quantity"]')).click();
      count = count -1;
    }
  }

};
