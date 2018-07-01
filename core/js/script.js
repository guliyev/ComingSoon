$(document).ready(function(){
    $(".slide").click(function(){
      $(".sidebar").animate({
        width: "toggle"
      });
    });
  });