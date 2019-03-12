function something() {
  var x = window.localStorage.getItem('aaa');
  x = x * 1 + 1; // преобразование x к типу число
  window.localStorage.setItem('aaa', x);
  alert(x);
}

function add_to_cart(id) {

  /*
  var cart = window.localStorage.getItem('cart');

  if (cart == null) {
    var cart = {
      "total": 0;
      "products": []
    };


    window.localStorage.setItem('cart', cart);

  }*/

  alert(id);
}

function creat_cart() {

}