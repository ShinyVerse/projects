$('.loc').hover(
  function(){
    $(this).html("<strong>Location:</strong> Your house?!");
  },
  function() {
    $(this).html("<strong>Location:</strong> Treehouse Adoption Center");
});

// Adds a pet to the page with user input on button click
$('#add-pet').on('click', function() {
  // Grab info from the form
  var $name = $('#pet-name');
  var $species = $('#pet-species');
  var $notes = $('#pet-notes');

  //Assemble the HTML of our new element with the above variables
  var $newPet = $(
      '<section class="six columns"><div class="card"><p><strong>Name:</strong> ' + $name.val() +
      '</p><p><strong>Species:</strong> ' + $species.val() +
      '</p><p><strong>Notes:</strong> ' + $notes.val() +
      '</p><span class="close">&times;</span></div></section>'
    );

  // Attach the new element to the page
  $('#posted-pets').append($newPet);

  $('.close').on('click', function(){
    $(this).parent().remove();
  })

  //Reset Form Fields
  $name.val("");
  $species.val("Dog");
  $notes.val("");

});

//puppy images fade in

$('img').css('display', 'none').fadeIn(1600);

$('.card').on('click', function(){
  $(this).toggleClass('selected');
  //success! But for no reason at all, except I can do this.
  // $(this).parent().next().css('border', '3px solid black');
})




























//
