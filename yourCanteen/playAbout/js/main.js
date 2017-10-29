function createPageData(data) {
  $.each(data.dishList, function(key, value) {

    console.log(value.images[0]);
    var starRatingID = 0;
    var image = value.images[0];
    var id = value.id;
    var $listingBox = $("<div id ='" + id + "' class='listingBox'></div>");
    var $feature = $("<div class='feature'></div>");
    var $spanP = $("<span><p></p></span>");
    var $image = $("<img src= '" + image + "'/>");
    var $infoListing = $("<div class='info-Listing'></div>");
    var $chefImage = $("<img src='img/chef1.jpg' alt='Chef profile picture' class='chefPic'/>");
    var $restaurantName =   $('<p class="restaurantName"></p>');
    var $starRate = $('<p id="distance'+ starRatingID +'">&#x2605; &#x2605; &#x2605; &#x2605; &#x2606;</p>');
    var $distanceSlash = $('<p class="distanceSlash">/</p>');
    var $actualDistance = $('<p id="actualDistance'+ starRatingID + '">&#x2662; 1m</p></br>');
    var $divPrice = $('<div class="pricing"></div>');
    //append to divPrice
    var $origAndCurrentPrice = $('<p class="origPrice">9.50</p><p class="currentPrice">9.00</p>');
    //done.
    var $synopsis =  $('<p class="dish-info">Some information about the dish...</p>');
    //end of dish-info

    $feature.append($image);
    $feature.append($spanP);
    $listingBox.append($feature);
    $(".outerContainer").append($listingBox);

    starRatingID++;
  });
}

// $.getJSON('https://api-staging.yourcanteen.com/dishes?latitude=51.5074&longitude=-0.127758&radius=10000&date=' + showCurrentDate() + '', function(data) {
 $.getJSON('https://api-staging.yourcanteen.com/dishes?latitude=51.5074&longitude=-0.127758&radius=10000&date=2017-10-28', function(data){
  createPageData(data);


});

function callDaysData() {
  if ($("#today").hasClass("selected")) {
    $.getJSON('https://api-staging.yourcanteen.com/dishes?latitude=51.5074&longitude=-0.127758&radius=10000&date=' + showCurrentDate() + '', function(data) {
    createPageData(data);
    });

  } else if ($("#tomorrow").hasClass("selected")) {
    $.getJSON('https://api-staging.yourcanteen.com/dishes?latitude=51.5074&longitude=-0.127758&radius=10000&date=' + showTomorrowDate() + '', function(data) {
    createPageData(data);
    });
  }
}


function showCurrentDate() {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  return newdate = year + "-" + month + "-" + day;
}

function showTomorrowDate() {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate() + 1;
  var year = dateObj.getUTCFullYear();

  return newdate = year + "-" + month + "-" + day;
}

$("#tomorrow").on("click", function() {
  $("#today").removeClass("selected")
  $(this).addClass("selected");
  $(".sampleBox").empty();
  callDaysData();
});


$("#today").on("click", function() {
  $("#tomorrow").removeClass("selected")
  $(this).addClass("selected");
  $(".sampleBox").empty();
  callDaysData();
});
