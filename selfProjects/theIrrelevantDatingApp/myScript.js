$(function() {
  var $finishButton = $('#finishButton');
  $finishButton.on('click', function(){
    $(this).hide();
    $(this).delay(250).fadeIn(1000);
  });

var generatedTraitsArray = [ 'Shirty',
                             'Touchy',
                             'Sweaty',
                             'Sticky',
                             'Ridiculous',
                             'Legendary',
                             'Tractor-obsessed',
                             'Corny',
                             'Criminal',
                             'Sour',
                             'Musky',
                             'Dusty',
                             'Excess-skin',
                             'German',
                             'Blistered',
                             'Diseased',
                             'Ancient',
                             'Elsewhere',
                             'Distant',
                             'B.O',
                             'Spaced',
                             'Baked',
                             'Fruitcake',
                             'Soggy',
                             'Hairy'];

function randomNumber(sentNumber) {
  return Math.floor(Math.random() * sentNumber);
}

$('.generateButton').on('click', function(){
  var $this = $(this
  console.log($this);



  // $(this).prev().val(generatedTraitsArray[1]);
})

});
