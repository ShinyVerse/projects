// var pic = document.getElementById("pic");
// pic.setAttribute("src", "img/sprout1.jpg");
//
// var count = 2
// setInterval(function () {
//   pic.setAttribute("src", "img/sprout" + count + ".jpg")
//   count++;
//   if (count === 5) {
//     count = 1;
//   }
// }, 3000 )

 //get picture set to var
  var pic1 = document.getElementById("pic1");
  var pic2 = document.getElementById("pic2");
  var pic3 = document.getElementById("pic3");


 //set a random timer
 function counter(){
   count = 3
    imageNumber = Math.ceil(Math.random()* count);
    return imageNumber;
 }

//change any picture

setInterval(function(){
  pic1.setAttribute("src", "img/character" + counter() + ".jpg")
}, 2000)

setInterval(function(){
  pic2.setAttribute("src", "img/character" + counter() + ".jpg")
}, 2000)

setInterval(function(){
  pic3.setAttribute("src", "img/character" + counter() + ".jpg")
}, 2000)
