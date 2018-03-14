// *  Vowel Count                                                                         *
// *  Using the JavaScript language, have the function VowelCount(str) take the str       *
// *  string parameter being passed and return the number of vowels the string contains   *
// *  (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this       *
// *  challenge.


function VowelCount(str){
  var vowCount = 0;

  for (var i = 0; i < str.length; i++){
    var testVowel = new RegExp("[aeiouAEIOU]");
    var result = testVowel.test(str[i]);

    if (result){
      vowCount++;
    }
  }
  return vowCount;
}
