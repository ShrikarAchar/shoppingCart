/**
 * Created by automac on 3/27/17.
 */


module.exports = function cart(oldCart) {
this.items = oldCart.items;
this.totalQty = oldCart.totalQty;
this.totalPrice = oldCart.totalPrice;

this.add = function (item, id) {
    var storedItem = this.items[id];
    if (!storedItem){
        storedItem = this.item[id] = {item: item, qty: 0, price: 0}
    }
    storedItem.qty++;
    storedItem.price = storedItem.item.price * storedItem.qty;
    this.totalQty++;
    this.totalPrice += storedItem.price;
  }
  this.generateArray = function () {
      var arr = [];
      for(var id in this.items){
          arr.push(this.items[id]);
      }
      return arr;
  };
};

