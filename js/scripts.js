<<<<<<< HEAD
//Business Logic

function Order(size, topping) {
  this.customSize = size;
  this.customTopping = topping;
  this.pizzaPrice = 0;
  this.toppingPrice = 0;
  this.totalPrice = 0;
}

Order.prototype.pizzaCost = function() {
  if(this.customSize === "Small") {
    return this.pizzaPrice += 5;
  } else if(this.customSize === "Medium") {
    return this.pizzaPrice += 7.50;
  } else if(this.customSize === "Large") {
    return this.pizzaPrice += 9;
  }
}

Order.prototype.PriceofToppings = function() {
  return this.toppingPrice = this.customTopping + .50;
}

Order.prototype.Total = function() {
  return this.totalPrice = this.pizzaPrice + this.toppingPrice;
}

//User Logic
$(document).ready(function(){
  $("form#pizza_order").submit(function(event){
    event.preventDefault();

    var pizzaSize = $("input:checkbox[name=pizza-size]:checked").val();
    var toppings = [];
    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      toppings.push(this.value);
    });


    $("#sizeResponses").show();
    $("input:checkbox[name=pizza-size]:checked").each(function(){
      var pizzaSize = $(this).val();
      $('#sizeResponses').append(pizzaSize + "<br>");
    });
    $("#toppingResponses").show();
    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      var pizzaToppings = $(this).val();
      $('#toppingResponses').append(pizzaToppings + "<br>");
    });

    var pizza = new Order(pizzaSize, toppings);
    pizza.pizzaCost();
    pizza.PriceofToppings();
    pizza.Total();

    $("#totalPrice").text(pizza.totalPrice);
=======
function pizzaPrice() {
  var pizzaPrice=0;
  var sizeResponses = document.forms["pizza-size"];
  var includeSize = sizeResponses.elements[size-responses];

  if(pizza-size.checked==true){
    sizePrice=5;
  }
  return sizePrice;
  }

function toppingPrice() {
  var toppingPrice=0;
  var toppingResponses = document.forms["pizza-toppings"];
  var includeToppings = toppingResponses.elements[pizza-toppings];

  if(pizza-toppings.checked==true){
    toppingPrice=.5;
  }
  return toppingPrice;
}


function getTotal()
{
  //
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var pizzaPrice = sizePrice() + toppingPrice();

    //display the result
    document.getElementById('totalPrice').innerHTML = "Total Price For Pizza $"+pizzaPrice;
}

$(document).ready(function(){
  $("form#pizza_order").submit(function(event){
    event.preventDefault();
    $("#size-responses").show();
    $("input:checkbox[name=pizza-size]:checked").each(function(){
      var pizzaSize = $(this).val();
      $('#size-responses').append(pizzaSize + "<br>");
    });
    $("#topping-responses").show();
    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      var pizzaToppings = $(this).val();
      $('#topping-responses').append(pizzaToppings + "<br>");
    });
    $('#pizza_order').show();
>>>>>>> db1c74f27b6c8a2d3aa4fc45e318c481512a413e
  });
});
