const ShoppingCart = require('./ShoppingCart');
const cart = new ShoppingCart();

const assert = require('chai').assert;

describe('ShoppingCart', function () {
  it('on initialization, shopping cart total and item list should be empty', function () {
    let amountResult = cart.totalAmount();
    assert.equal(amountResult, 0);
  });
});
