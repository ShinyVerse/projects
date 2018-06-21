var buttonToProj = document.getElementsByClassName('projImg');
var shinyV = "https://shinyverse.github.io/";

function myFunction(item) {
  var num = item.charAt(4);
  console.log(num);
  switch (item.charAt(4)) {
    case "1":
      window.open("https://codepen.io/ShinyVerse/pen/wjNGBM");
      break;
    case "2":
   window.open(shinyV);
      break;
    case "3":
     window.open(shinyV + "galleryResponsive/respGal.html");
      break;
    case "4":
   window.open(shinyV +"timeMachine/timemachinehome.html");
      break;
    case "5":
      break;
    case "6":
   window.open("https://codepen.io/ShinyVerse/pen/ELQWjg")
      break;
    default:
      break;
  }
}

for (var i = 0; i < buttonToProj.length; i++) {
  buttonToProj[i].onclick = function() {
    (myFunction(this.id))
  };
}
