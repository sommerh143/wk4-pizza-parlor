function AllOrders () {
  this.orders = [],
  this.currentId = 0
}

AllOrders.prototype.addOrder = function(order) {
  order.id = this.assignId();
  this.contacts.push(order);
}

function Order(size, topping ){
  this.size = size,
  this.topping = topping
}


var allOrders = new AllOrders();
var topping = [];

$(document).ready(function () {
  $("#submitName").click(function(event){
    event.preventDefault();
    var inputtedName = $("#coustomerName").val();
    $("#inputName").text(inputtedName);
    console.log(inputtedName);
  })

  $("#toppingBtn").click(function(){
    var inputtedSize = parseInt($("#pizzaSize").val());
    // $("#pizzaSize").val("");
    
    $("input:checkbox[name=topping]:checked").each(function(){
      var toppingResults = parseInt($(this).val());
      topping.push(toppingResults);
      
      
    });
    var newOrder = new Order(inputtedSize, topping);
    console.log(newOrder);
  });
});
