$.getJSON('https://api-staging.yourcanteen.com/dishes?latitude=51.5074&longitude=-0.127758&radius=10000&date='+ showCurrentDate() +'', function(data){
    $(".sampleBox").append("<img src= '" + data.dishList[1].images[0] + "'/>");
  });

function callDaysData(){
  if ($("#today").hasClass("selected")){
    $.getJSON('https://api-staging.yourcanteen.com/dishes?latitude=51.5074&longitude=-0.127758&radius=10000&date='+ showCurrentDate() +'', function(data){
        $(".sampleBox").append("<img src= '" + data.dishList[1].images[0] + "'/>");
      });

  } else if ($("#tomorrow").hasClass("selected")){
    $.getJSON('https://api-staging.yourcanteen.com/dishes?latitude=51.5074&longitude=-0.127758&radius=10000&date='+ showTomorrowDate() +'', function(data){
        $(".sampleBox").append("<img src='img/img1.jpg'/>");
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
