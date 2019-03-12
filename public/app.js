function add_to_cart(id) {
  key = 'product_'+id;

  var x = window.localStorage.getItem(key);
  x = x*1 + 1;
  window.localStorage.setItem(key, x);

  set_text_cart();
  set_value_order();
}

function set_text_cart() {
  var total = cart_get_number_of_items();

  if (total == 0) {
    document.getElementById("cart").setAttribute("value","Корзина пуста");
  }else{
    document.getElementById("cart").setAttribute("value","В корзине ( "+total+" )");
  }
}

function set_value_order() {
  var total="";
  for (var i=0; i < localStorage.length; i++) {
    if (window.localStorage.key(i).indexOf('product_' ) == 0) {
      total += window.localStorage.key(i)+"="+window.localStorage.getItem(window.localStorage.key(i))+",";
    }
  }
  document.getElementById("order").setAttribute("value", total);
}

function cart_get_number_of_items() {
  var total=0;
  for (var i=0; i < localStorage.length; i++) {
    if (window.localStorage.key(i).indexOf('product_' ) == 0) {
      total = total + window.localStorage.getItem(window.localStorage.key(i))*1;
    }
  }
  return total;
}
