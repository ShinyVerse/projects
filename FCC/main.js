// // https://talaikis.com/api/quotes/random/
callData();
var JSONdata;
var QButton = document.getElementById("QButton");
var QSection = document.getElementById("QSection");
var QAuthor = document.getElementById("QAuthor");
function callData(){
  $.getJSON('https://talaikis.com/api/quotes/random/', function(data) {
    JSONdata = data;
  });

}

QButton.onclick = function(){
  QSection.innerHTML = JSONdata.quote;
  QAuthor.innerHTML = "- " + JSONdata.author;
  callData();
}


$('#tweet').click(function(){
                   window.open("https://twitter.com/intent/tweet?text=" + "\"" + $("#QSection").html()
                              + "\" " + $("#QAuthor").html() );

$("#QSection").html()
               });
