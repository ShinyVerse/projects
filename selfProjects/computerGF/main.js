var deviceBtns = document.getElementsByClassName("btn--interaction");
var deviceMessage = document.querySelector('.board__message');
const btnArray = ["ADMIRE ME!", "MAKE ME LAUGH!", "IMPRESS ME!", "LOVE ME!", "CONSOLE ME!", "ADVISE ME!"];

(function assignButtonAction(){
  for (var i=0; i < deviceBtns.length; i++) {
    deviceBtns[i].onclick = function(){
        findBtnIndex(btnArray, this.innerHTML);
    }
};
})();

function findBtnIndex(arr, item){
  let index = arr.indexOf(item);
  device.print(index);
}



var device = (function(){
  function talkToMe(response){
    return responses = [
    "Your skin, it fits you well.",
    "!false. It's funny because it's true",
    "I can respond with over 5 sentences. 6, to be exact.",
    "*hug*",
    "Don't worry, one day it will all be over.",
    "Remember to sleep with one eye open ;)"
  ][response]
  }

  function printToScreen(num){
    deviceMessage.innerHTML = talkToMe(num);
  }

  return {
    print: function(num){
      printToScreen(num)
    }
  }

})();
