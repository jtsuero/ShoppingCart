const ShoppingCart = require('./ShoppingCart');
const cart = new ShoppingCart();

const assert = require('chai').assert;

describe('ShoppingCart', function () {
  //add items to cart, create a duplicate of newspaper
  cart.add('STAPOT');
  cart.add('STARIC');
  cart.add('STACOF');
  cart.add('MEDNEW');
  cart.add('MEDNEW');
  let amountResult = cart.totalAmount();

  it('cart total should equal 60.97', function () {
    assert.equal(amountResult, 60.97);
    assert.typeOf(amountResult, 'number');
  });
});
