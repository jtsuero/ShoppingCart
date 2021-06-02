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

  add = item => {};

  totalAmount = () => {};

  itemsList = () => {};
}
