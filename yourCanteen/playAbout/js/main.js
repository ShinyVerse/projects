var userLocation = {
  "latitude": 51.535256,
  "longitude": -0.089363
};

restaurantLoc = {
                 "latitude":51.53169,
                 "longitude":-0.09449
              };

var distance = distance(userLocation.latitude, userLocation.longitude, restaurantLoc.latitude, restaurantLoc.longitude);
var shownDistance = (Math.round(distance*10)/10);  //displays 343.548


function distance(lat1, lon1, lat2, lon2, unit) {
	var radlat1 = Math.PI * lat1/180
	var radlat2 = Math.PI * lat2/180
	var theta = lon1-lon2
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
	if (unit=="K") { dist = dist * 1.609344 }
	if (unit=="N") { dist = dist * 0.8684 }
	return dist
}

function changeToPrice(price){
  return price.toFixed(2);
}


  var d = new Date;
  d.getHours(); // => 9
  d.getMinutes(); // =>  30
  d.getSeconds(); // => 51

  console.log(d.getHours() );
  console.log(d.getMinutes())



function createPageData(data) {


  $.each(data.dishList, function(key, value) {

    console.log(value.images[0]);
    var oldPrice = value.originalPrice.value /100;
    var nowPrice = value.price.value /100;
    var nameOfDish = value.name;
    var chefId = value.chefId;
    var chefProfileImage = data.chefIdToChefInfo["e5eb1ccf-bd45-4d01-8e2a-0d10cc275f62"].profileImage;
    var nameOfRestaurant = data.chefIdToChefInfo["e5eb1ccf-bd45-4d01-8e2a-0d10cc275f62"].kitchenName;
    var timeSlot = data.chefIdToChefInfo["e5eb1ccf-bd45-4d01-8e2a-0d10cc275f62"].deliveryTimes[0].slots[1];
    var countdown = timeSlot.slice(-5);


    var starRatingID = 0;
    var image = value.images[0];
    var id = value.id;
    var $sampleImage = $('<img src="img/chef1.jpg" alt="Chef profile picture" class="chefPic"/>')
    var $listingBox = $("<div id ='" + id + "' class='listingBox'></div>");
    var $feature = $("<div class='feature'></div>");
    var $spanP = $("<span><p>" + countdown +"</p></span>");
    var $image = $("<img src= '" + image + "'/>");

    var $infoListing = $("<div class='info-listing'></div>");
    var $chefImage = $("<img src='"+ chefProfileImage +"' alt='Chef profile picture' class='chefPic'/>");
    console.log(chefProfileImage);
    var $restaurantName =   $('<p class="restaurantName">'+ nameOfRestaurant +'</p>');
    var $starRate = $('<p id="distance'+ starRatingID +'">&#x2605; &#x2605; &#x2605; &#x2605; &#x2606;</p>');
    var $distanceSlash = $('<p class="distanceSlash">/</p>');
    var $actualDistance = $('<p id="actualDistance'+ starRatingID + '">&#x2662;'+ shownDistance +'</p></br>');
    var $divPrice = $('<div class="pricing"></div>');
    //append to divPrice
    var $origAndCurrentPrice = $('<p class="origPrice">£'+ changeToPrice(oldPrice) +'</p><p class="currentPrice">£'+ changeToPrice(nowPrice) +'</p>');
    //done.
    var $synopsis =  $('<p class="dish-info">'+ nameOfDish +'</p>');
    //end of dish-info

    $feature.append($image);
    $feature.append($spanP);
    $infoListing.append($chefImage);
    $infoListing.append($restaurantName);
    $infoListing.append($starRate);
    $infoListing.append($distanceSlash);
    $infoListing.append($actualDistance);
    $divPrice.append($origAndCurrentPrice);
    $infoListing.append($divPrice);
    $infoListing.append($synopsis);

    $listingBox.append($feature);
    $listingBox.append($infoListing);
    $(".outerContainer").append($listingBox);

    //not incrementing
    starRatingID++;
  });
}

$.getJSON('https://api-staging.yourcanteen.com/dishes?latitude=51.5074&longitude=-0.127758&radius=10000&date=' + showCurrentDate() + '', function(data) {
 // $.getJSON('https://api-staging.yourcanteen.com/dishes?latitude=51.5074&longitude=-0.127758&radius=10000&date=2017-10-30', function(data){
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
  $(".outerContainer").empty();
  callDaysData();
});


$("#today").on("click", function() {
  $("#tomorrow").removeClass("selected")
  $(this).addClass("selected");
  $(".outerContainer").empty();
  callDaysData();
});
