/*$(document).ready(function(){

  var result = $("#getheight").height();
  var number = 130;
  var number2 = $("#sub-arrangementer").height();
  var number3 = $("#sub-menukort").height();
  var sumResult = result + number - number2 - number3;
  var sumResult2 = result + number - number3;
  var sumResult3 = result + number - number2;
  
  $('#layout').css('min-height', sumResult);
  
  
  function handler1() {
    $('#layout').css('min-height', sumResult3);
    $("#menukort").one("click", handler2);
}

function handler2() {
    $('#layout').css('min-height', sumResult);
    $("#menukort").one("click", handler1);
}
$("#menukort").one("click", handler1);
  

function handler3() {
    $('#layout').css('min-height', sumResult2);
    $("#sub-arrangementer").one("click", handler4);
}

function handler4() {
    $('#layout').css('min-height', sumResult);
    $("#sub-arrangementer").one("click", handler3);
}
$("#sub-arrangementer").one("click", handler3);
  

  });*/

$(document).ready(function(){
    $(".submenu").hide();
    $("#menukort").click(function(){
        $("#sub-menukort").slideToggle("normal");
        $("#menukort").toggleClass("current");
    });
    
    $("#arrangementer").click(function(){
        $("#sub-arrangementer").slideToggle("normal");
        $("#arrangementer").toggleClass("current");
    });
    

});

