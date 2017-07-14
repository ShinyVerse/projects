
var buttonCheck = document.getElementById('checkrooms');
var buttonBook = document.getElementById('book');


var hotel = {
  name: "Grand Hotel",
  rooms: 12,
  booked: 4,
  gym: false,

  checkAvailability: function() {
    return this.rooms - this.booked;
  },

  roomBooked: function() {
    this.booked++;
  }
};

buttonCheck.onclick = function() {
  alert("hello, there are: " + hotel.checkAvailability() + " rooms available.");

  console.log(hotel.checkAvailability());
}

buttonBook.onclick = function() {
  alert("You have booked");
  hotel.roomBooked();
  console.log("Total hotel rooms booked: " + hotel.booked);
  console.log("Rooms available: " + hotel.checkAvailability());
}
