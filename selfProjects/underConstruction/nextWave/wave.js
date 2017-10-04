$(".image").on("click", function(){
  $(".image").empty();
  $(".image").append("<img src='gif/miniwave.gif?"+ Math.random() + "'/>");;
});
