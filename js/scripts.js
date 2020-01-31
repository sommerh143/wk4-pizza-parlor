function AllOrders () {
  this.orders = [],
  this.currentId = 0
}

AllOrders.prototype.addOrder = function(order) {
  order.id = this.assignId();
  this.contacts.push(order);
}

function Order(size, topping){
  this.size = size,
  this.topping = topping
}


var allOrders = new AllOrders();

$(document).ready(function () {
  $("#submitName").click(function(event){
    event.preventDefault();
    var inputtedName = $("#coustomerName").val();
    $("#inputName").text(inputtedName);
    console.log(inputtedName);
  })

  $("#toppingBtn").click(function(){
    var inputtedSize = $("#pizzaSize").val();
    $("#pizzaSize").val("");
    
    var newOrder = new Order(inputtedSize);
    console.log(newOrder);
    $("input:checkbox[name=topping]:checked").each(function(){
      
      var toppingResults = $(this).val();
      // topping.push(toppingResults);
      $(topping).val([]);
      console.log(newOrder);
    $()
   });
  });
});
