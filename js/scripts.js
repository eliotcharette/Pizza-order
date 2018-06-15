//business logic
function Pizza(name, size, number, toppings) {
  this.name = name;
  this.size = size;
  this.number = number;
  this.toppings = [];
}
function Toppings(top1, top2, top3, ulimited) {
  this.top1 = top1;
  this.top2 = top2;
  this.top3 = top3;
  this.unlimited = unlimited;
}





//user interface
$(document).ready(function () {
  function resetFields() {
    $("input#name").val("");
    $("select#size").val("");
    $("select#number").val("");
    $("select#toppings").val("");
  }
//purchase button
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    var nameinput = $("input#name").val();
    var sizeinput = $("select#size").val();
    var numberinput = $("select#number").val();
    var toppingsinput = $("select#toppings").val();

    var newPizza = new Pizza(nameinput, sizeinput, numberinput, toppingsinput)

    $("h3#ordered").append("<li><span class='pizza'>" + "Thank you, " + newPizza.name + " click here to see your order" + "</span></li>")
//showorder
    $(".pizza").last().click(function() {
      $("#show-order").show();
      $("#show-order h2").text(newPizza.name);
      $("#listname").text(newPizza.name);
      $("#listsize").text(newPizza.size);
      $("#listnumber").text(newPizza.number);
      $("#listtoppings").text(newPizza.toppings);
    });
    resetFields();
  });





});
