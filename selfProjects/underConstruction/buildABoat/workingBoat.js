//To be able to show a boat that the user has made.

var $mysteryBoat = $("#mysteryBoat");
var $rowBoat = $("#rowBoatImage");
var $sailBoatImage = $("#sailBoatImage");
var $shipBoatImage = $("#shipBoatImage");
var $showMeButton = $("#showMeButton");
var $UserBoatColor = $(".myBoat");


$showMeButton.click(function() {
  $(".nameBox").empty();
  showThatBoat();
})

function showThatBoat() {
  let boatName = $("#boatName").val();
  let boatType = $("#selectType").val();
  let boatColor = $("#myBoatColor").val();



  if (validate()) {
    switch (boatType) {
      case "Rowboat":
        $mysteryBoat.css('z-index', '-20');
        $rowBoat.css('z-index', '10');
        $UserBoatColor.css('fill', boatColor);
        $(".nameBox").append("<h2></h2>", boatName);


        break;
      case "Ship":
        $mysteryBoat.css('z-index', '-20');
        $shipBoatImage.css('z-index', '10');
        $UserBoatColor.css('fill', boatColor)
        $(".nameBox").append("<h2></h2>", boatName);
        break;
      case "Sailboat":
        $mysteryBoat.css('z-index', '-20');
        $sailBoatImage.css('z-index', '10');
        $UserBoatColor.css('fill', boatColor);
        $(".nameBox").append("<h2></h2>", boatName);
        break;
      default:
        $mysteryBoat.css('z-index', '20');
    }
  }

  function validate() {
    if (boatName == "") {
      alert("A boat must have a name!");
      $(".nameBox").append("<h2></h2>", "A boat needs a seaworthy name before it can't set sail!");
      return false;
    }
    if (!/^[a-zA-Z]*$/g.test(boatName)) {
      alert("Invalid characters");
      $(".nameBox").append("<h2></h2>", "A boat needs a seaworthy name before it can't set sail!");
      return false;
    }
    return true;

  };

}
