//business logic
function Pizza(name, size, number, top1, top2, top3) {
  this.name = name;
  this.size = size;
  this.number = number;
  this.top1 = top1;
  this.top2 = top2;
  this.top3 = top3;
}
Pizza.prototype.price = function() {
  if(this.size == "Personal ($10.00)"){
    this.size = 10;
  } else if(this.size == "Medium ($15.00)"){
    this.size = 15;
  } else if(this.size == "Large ($20.00)") {
    this.size = 20;
  } else if(this.size == "X-Large ($25.00)") {
    this.size = 25;
  }
  if(this.number == "2 toppings ($1.00)"){
    this.number = 1;
  } else if (this.number == "3 toppings ($2.00)") {
    this.number = 2;
  } else {
    this.number = 0;
  }
  return "Your purchase total is: $" + parseInt(this.size + this.number) + ".00";
}

//user interface
$(document).ready(function () {
//reset function
  function resetFields() {
    $("input#name").val("");
    $("select#size").val("");
    $("select#number").val("");
    $("input#1top").val("");
    $("input#2top").val("");
    $("input#3top").val("");
  }
//topping fields hide/show
  $("input#check1").change(function() {
   $("#1top").show();
   $("#2top").hide();
   $("#3top").hide();
});
$("input#check2").change(function() {
   $("#1top").show();
   $("#2top").show();
   $("#3top").hide();
});
$("input#check3").change(function() {
 $("#1top").show();
 $("#2top").show();
 $("#3top").show();
});
//purchase button
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    var nameinput = $("input#name").val();
    var sizeinput = $("select#size").val();
    var numberinput = $("select#number").val();
    var top1input = $("input#1top").val();
    var top2input = $("input#2top").val();
    var top3input = $("input#3top").val();
    var newPizza = new Pizza(nameinput, sizeinput, numberinput, top1input, top2input, top3input)

    $("h3#ordered").append("<li><span class='pizza'>" + "Thank you, " + newPizza.name + " click here to see your order" + "</span></li>")
//showorder
    $(".pizza").last().click(function() {
      $("#show-order").show();
      $("#show-order h2").text(newPizza.name);
      $("#listname").text(newPizza.name);
      $("#listsize").text(newPizza.size);
      $("#listnumber").text(newPizza.number);
      $("ul#topping").text("");
      $("ul#topping").append("<li>" + newPizza.top1 + ", " + newPizza.top2 + ", " + newPizza.top3 + "</li>")
      $("#price").text(newPizza.price());
    });
    resetFields();
  });
});
