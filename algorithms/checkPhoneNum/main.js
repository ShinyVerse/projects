function telephoneCheck(str) {

var regTest1 = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/;

  if (regTest1.test(str)){
      return true;
  } else {
      return false;
  }
}

telephoneCheck("555-555-5555");
