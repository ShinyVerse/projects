
$.getJSON( "https://api.themoviedb.org/3/genre/movie/list?api_key=cc37b9ca9c1ce2149e525da9627da101&language=en-US", function( data ) {

$.each(data.genres, function(key, value){
  var id = value.id;
  var name = value.name;

  $(".result").append("<button name=\"" + id + "\">" + name + "</button>" )

})

});
