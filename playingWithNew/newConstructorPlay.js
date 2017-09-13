let boatImageSection = document.getElementById('boatImageSection');

var $rowBoat = $('#rowBoatImage');
var $sailBoat = $('#sailBoatImage');
var $shipBoat = $('#shipBoatImage');

// When showMe button is pressed a function is called
$("#showMeButton").on("click", function (e){
  e.preventDefault();
//when function is called it will check all the inputs currently on page
  let boatName = $("#boatName").val();
  let boatType = $("#selectType").val();
  let boatColor = $("#myBoatColor").val();




//create new boat which the selections will go into.
  function Boat(name, type, color) {
    this.name = name,
    this.type = type,
    this.color = color
  }


  var myBoat = new Boat(boatName, boatType, boatColor);
  if (boatType === "rowBoat"){
    $rowBoat.css('display', 'inline-block');
  }

  // function whichBoat(boatType){
  //   switch(boatType) {
  //   case "Rowboat":
  //       $rowBoat.css('display', 'inline-block');
  //       break;
  //   case "Ship":
  //       $shipBoat.css('display', 'inline-block');
  //       break;
  //   case "Sailboat":
  //       $sailBoat.css('display', 'inline-block');
  //       break;
  //   default:

    }
  }
  console.log(myBoat);

});
