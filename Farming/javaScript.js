var pic = document.getElementById("pic");
pic.setAttribute("src", "img/sprout1.jpg");

var count = 2
setInterval(function () {
  pic.setAttribute("src", "img/sprout" + count + ".jpg")
  count++;
  if (count === 5) {
    count = 1;
  }
}, 3000 )
