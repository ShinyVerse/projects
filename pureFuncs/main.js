var calculateBtn = document.querySelector(".calc__btn");
window.calculator = {};
window.calculator.inputCheck = (function(){
  var numsTest = /[0-9]/;
  return {
    /**
     * Tests user inputs are only numbers
     *
     // * @param  {user value and user percentage}
     // * @return {string} Detail of which test failed or whether test passed.
     // * @example
     * window.calculator.inputCheck.test(1400, 15) //"passed"
     */
     validate: function (input, errorLabel) {
       console.log(input.value);
       if (!numsTest.test(input.value)){
          errorLabel.innerText = "Please enter a numeric value for " + input.placeholder.toLowerCase();
       } else {
         return true;
       }
     }
  };
})();

window.calculator.action = (function(){
  var errorLabel = document.querySelector(".calc--err");
    var amount = document.querySelector(".calc--value");
    var percentage = document.querySelector(".calc--percentage");
    if (window.calculator.inputCheck.validate(amount, errorLabel) && window.calculator.inputCheck.validate(percentage, errorLabel)){
      errorLabel.innerText =  (amount.value / 100) * percentage.value;
    }
  })
calculateBtn.addEventListener("click", window.calculator.action);
