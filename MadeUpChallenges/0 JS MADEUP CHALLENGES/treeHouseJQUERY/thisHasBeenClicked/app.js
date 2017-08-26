//select all the li elements.
//attach a listener and a function to change the text within when it has been clicked.

$('li').on('click', function(){
  $(this).text('Clicked!');
});
