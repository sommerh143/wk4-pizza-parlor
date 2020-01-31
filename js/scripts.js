






$(document).ready(function () {
  $("#submitName").click(function(event){
    event.preventDefault();
    var name = $("#coustomerName").val();
    $("#inputName").text(name);
  })

  var toppingPrice = [];
 $("#toppingBtn").click(function(){
  $("input:checkbox[name=topping]:checked").each(function(){
    var toppingResults = $(this).val();
    toppingPrice.push(toppingResults);
   });
  });
});
