class ShoppingCart {
  constructor() {
    this.cartTotal = 0;
    this.cartItems = [];
    this.storeItems = {
      STAPOT: {
        price: 10.0,
        name: 'Potatoes',
      },
      STARIC: {
        price: 30.0,
        name: 'Rice',
      },
      STACOF: {
        price: 14.99,
        name: 'Coffee',
      },
      MEDNEW: {
        price: 2.99,
        name: 'Newspaper',
      },
    };
  }

  add = item => {
    //takes SKU and adds items to total and item list
    let currentItem = this.storeItems[item];
    this.cartTotal += currentItem.price;
    if (
      this.cartItems.length === 4 ||
      this.cartItems.includes(currentItem.name)
    ) {
      return this.cartTotal;
    }

    this.cartItems.push(currentItem.name);
    return this.totalAmount();
  };

  totalAmount = () => {
    //return total amount of all items in cart
    return Math.round(this.cartTotal * 100) / 100;
  };

  itemsList = () => {
    //return items, ordered alphabetically, no duplicates
    this.cartItems.sort();
    return this.cartItems;
  };
}

module.exports = ShoppingCart;
