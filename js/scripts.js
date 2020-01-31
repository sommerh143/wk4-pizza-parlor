$(document).ready(function () {
  $("#submitName").click(function(event){
    event.preventDefault();
    var name = $("#coustomerName").val();
    $("#inputName").text(name);
  })
});