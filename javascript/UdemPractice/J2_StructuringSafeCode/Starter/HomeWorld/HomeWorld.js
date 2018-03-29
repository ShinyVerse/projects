(function(global, $){

  // create a 'new' object. Allows to avoid writing new continuously in code.
  var HomeLand = function(country, visaNeeded){
    return new HomeLand.init(country, visaNeeded);
  }

  var countries = ['China', 'Mexico', 'Germany'];

  HomeLand.prototype = {

    validate: function(country, visaNeeded){
      //check that visa is needed
      if (countries.indexOf(country) === -1){
        throw "A visa is required for " + country;
      } else {
        console.log("Everything is fine!");
      }
    }

  }

//the actual object that var homeWorld calls.
  HomeLand.init = function(country, visaNeeded){
    //to always know where this is pointing when referring to this object.
    var self = this;
    self.country = country || '';
    self.language = visaNeeded || false;

    self.validate(country, visaNeeded);

  }

  HomeLand.init.prototype = HomeLand.prototype;

  global.HomeLand = global.HL$ = HomeLand;






}(window, jQuery));
