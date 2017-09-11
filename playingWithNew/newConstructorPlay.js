let boatImageSection = document.getElementById('boatImageSection');

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
    this.color = color,
    this.displayWhat = function(){
      switch(this.type) {
      case "Rowboat":
        $("#boatImageSection").attr("display", "collapse");
        $("rowBoatImage").attr("display", "inline-block");
          break;
      case "Ship":
        $("#boatImageSection").attr("display", "collapse");
        $("rowBoatImage").attr("display", "inline-block");
          break;
      case "Sailboat":
        $("#boatImageSection").attr("display", "collapse");
        $("#rowBoatImage").attr("display", "inline-block");
          break;
      default:
        $("#boatImageSection").attr("display", "inline-block");
      }
    }
  }


  var myBoat = new Boat(boatName, boatType, boatColor);

});
