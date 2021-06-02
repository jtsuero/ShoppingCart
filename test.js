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
  let itemList = cart.itemsList();

  it('cart total should equal 60.97', function () {
    assert.equal(amountResult, 60.97);
    assert.typeOf(amountResult, 'number');
  });

  it('after adding items to cart, price and cart items update accordingly', function () {
    assert.equal(itemList.length, 4);
    //ensures no duplicates and alphabetized
    assert.deepEqual(itemList, ['Coffee', 'Newspaper', 'Potatoes', 'Rice']);
  });
});
