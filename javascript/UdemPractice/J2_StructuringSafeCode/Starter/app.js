var g = G$("Jon", "Snow");
console.log(g);

$("#login").click(function(){

  var loginGrtr = G$("Jon", "Snow");

  $("#logindiv").hide();

  loginGrtr.setLang($('#lang').val()).HTMLGreeting("#greeting", false).log();

})
