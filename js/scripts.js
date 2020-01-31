function AllOrders () {
  this.orders = []
}

AllOrders.prototype.addOrder = function(order) {
  this.orders.push(order);
}

function Order(size, topping ){
  this.size = size,
  this.topping = topping
}

Order.prototype.totalPrice = function(){
  var toppingprice = topping.reduce((a, b) => a + b, 0);
  console.log("this is size",this.size);
  var Prise = this.size += toppingprice;
  console.log(Prise);
  $("#price").text(Prise);
}

var allOrders = new AllOrders();
var order = new Order();
var topping = [];
var size = this.size;

$(document).ready(function () {
  $("#submitName").click(function(event){
    event.preventDefault();
    var inputtedName = $("#coustomerName").val();
    $("#inputName").text(inputtedName);
    console.log(inputtedName);
  })

  $("#toppingBtn").click(function(){
    var inputtedSize = parseInt($("#pizzaSize").val());
    $("#pizzaSize").val("");
    
    $("input:checkbox[name=topping]:checked").each(function(){
      var toppingResults = parseInt($(this).val());
      topping.push(toppingResults);
    });
    
    var order = new Order(inputtedSize, topping);
    order.totalPrice();
  });
});
