//problem: User, when clicking on image, goes to a dead end. Poor UX
//Solution: Create an overlay with the large image.  Keeps user on same page. :Lightbox.
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>')
var $caption = $('<p></p>');

//2.1 An image to overlay
$overlay.append($image);
//2.2 A Caption to overlay
$overlay.append($caption);
//2.Add an overlay:
$("body").append($overlay);


//1.Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  console.log(imageLocation);
  //1.2 Update overlay with the image linked in the link.
  $image.attr('src', imageLocation);
  //1.1 Show the overlay
  $overlay.show()

  //1.3 Get child's alt attr and set caption
    var captionText = $(this).children('img').attr("alt");
    $caption.text(captionText);
});




//3. When overlay is clicked:
$overlay.click(function(){
    //3.1 Hide the overlay
  $overlay.hide(); //using overlay rather than this stops jquery selecting it again(finding it)
  //because it is already saved in a var and ready to use whenever.

  //or $(this).hide();
});
