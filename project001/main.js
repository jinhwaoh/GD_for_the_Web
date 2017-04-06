$(document).ready(function() {


  $(".dropdown").click(function(){
  	var text = $("dd",this);
  	var icon = $(this).children('.toggle');

    text.slideToggle(400, function (){     
      console.log("dropdown opened");

    });

    $(this).toggleClass("selected");

  });





});
console.log(8+8);


