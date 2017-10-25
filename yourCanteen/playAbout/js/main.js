var $listingBox = $("<div class='listingBox>'</div>");
var $feature = $("<div class='feature'></div>");
var $spanP = $("<span><p></p></span>");

$.getJSON('https://api-staging.yourcanteen.com/dishes?latitude=51.5074&longitude=-0.127758&radius=10000&date='+ showCurrentDate() +'', function(data){
  $.each(data.dishList, function(key, value){
      var image = value.images[0];
        $(".outerContainer").append($listingBox);
        $listingBox.append($feature);
        $feature.append("<img src= '" + image + "'/>");
        $feature.append($spanP);
        $spanP.innerHTML= "Some words";

  });
  });

function callDaysData(){
  if ($("#today").hasClass("selected")){
    $.getJSON('https://api-staging.yourcanteen.com/dishes?latitude=51.5074&longitude=-0.127758&radius=10000&date='+ showCurrentDate() +'', function(data){
      $.each(data.dishList, function(i, value){
          var image = value.images[0];
            $(".outerContainer").append("<img src= '" + image + "'/>");
      });
      });

  } else if ($("#tomorrow").hasClass("selected")){
    $.getJSON('https://api-staging.yourcanteen.com/dishes?latitude=51.5074&longitude=-0.127758&radius=10000&date='+ showTomorrowDate() +'', function(data){
      $.each(data.dishList, function(i, value){
          var image = value.images[0];
            $(".outerContainer").append("<img src= '" + image + "'/>");
      });
      });
  }
}


  function showCurrentDate(){
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

     return newdate = year + "-" + month + "-" + day;
  }

  function showTomorrowDate(){
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate()+1;
    var year = dateObj.getUTCFullYear();

     return newdate = year + "-" + month + "-" + day;
  }

$("#tomorrow").on("click", function(){
  $("#today").removeClass("selected")
  $(this).addClass("selected");
  $(".sampleBox").empty();
  callDaysData();
});


$("#today").on("click", function(){
  $("#tomorrow").removeClass("selected")
  $(this).addClass("selected");
  $(".sampleBox").empty();
  callDaysData();
});
