var intervalId;
var attempts = 0;

function randomizePictures(){
 intervalId =  setInterval(changeImage, 1000);
}

function stopPictures(){
  clearInterval(intervalId);
  console.log(image);
  console.log(image2);
  console.log(image3);
  if (image.src == image2.src && image.src == image3.src){
    alert("You are a Winner! It took you " + attempts + " to match all three pictures!");
    attempts = 0;
  } else {
    attempts++
    alert("That's not a match. Try again!");
    randomizePictures();
  }
}


var newImage = document.getElementById("image").getAttribute("src"); //takes the src from image id which is img/1.jpg
var newImage2 = document.getElementById("image2").getAttribute("src");
var newImage3 = document.getElementById("image3").getAttribute("src");



function changeImage(newImage, newImage2, newImage3){  //declares function



   newImage = "img/"  + magicNumber() + ".jpg";
   newImage2 = "img/"  + magicNumber() + ".jpg";
   newImage3 = "img/"  + magicNumber() + ".jpg";
  document.getElementById("image").setAttribute("src", newImage);
    document.getElementById("image2").setAttribute("src", newImage2);
   document.getElementById("image3").setAttribute("src", newImage3);
return newImage, newImage2, newImage3;
}



function magicNumber(){
  var number = 3;
  var magicNumber = Math.ceil( Math.random() * number);
  return magicNumber;

}
