// var g = G$("Jon", "Snow");
// console.log(g);
//
// $("#login").click(function(){
//
//   var loginGrtr = G$("Jon", "Snow");
//
//   $("#logindiv").hide();
//
//   loginGrtr.setLang($('#lang').val()).HTMLGreeting("#greeting", false).log();
//
// })

var input1 = "";
var input2 = "";

$('#country').on('change', function(){
  // alert("Changed to " + $('#country').val());
  input1 = $('#country').val();
});

$('#visa').on('change', function(){
  // alert("Changed to " + $('#visa').val());
  input2 = $('#visa').val();
});


var input1 = $('#country').val();
var input2 =  $('#visa').val();


$('#login').click(function(){
  HL$($('#country').val(), $('#visa').val());
})
