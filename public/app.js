function something() {
  var x = window.localStorage.getItem('aaa');
  x = x * 1 + 1; // преобразование x к типу число
  window.localStorage.setItem('aaa', x);
  alert(x);
}

function add-cart() {
  var cart = window.localStorage.getItem('cart');

}

