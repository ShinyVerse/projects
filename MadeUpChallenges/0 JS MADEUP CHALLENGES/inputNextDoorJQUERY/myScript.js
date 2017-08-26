var array = [ 'beans', 'salmon', 'eggs'];

$(function() {
  $('#generateButton').on('click', function() {
    var what = $(this).closest().attr['name="firstTrait"'];
    alert(what);
  })
});
