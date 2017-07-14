
var buttonCheck = document.getElementById('checkrooms');
var buttonBook = document.getElementById('book');


var hotel = {
  name: "Grand Corner Cabins",
  rooms: 12,
  booked: 4,
  gym: false,

  checkAvailability: function() {
    return this.rooms - this.booked;
  },

  roomBooked: function() {
    this.rooms--;
    this.booked++;
  }
};

buttonCheck.onclick = function() {
  alert("hello, there are: " + hotel.checkAvailability() + " rooms available.");
}

buttonBook.onclick = function() {
  alert("You have booked");
  hotel.roomBooked();
  console.log(hotel.booked);
  console.log(hotel.rooms);
}
