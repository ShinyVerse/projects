var myAdviceList = ["Marry someone with a different favourite cereal to you so they won't eat yours",
                    "Never shout at someone unless shit is on fire yo",
                    "You're not weird, you're limited edition",
                    "Your pants never get too tight if you don't wear any",
                    "Know your worth...then add tax",
                    "If you have to hang up on someone do it in the middle of one of your own sentences.",
                    "Whatever you do, always give 100%. Unless you are donating blood."
                  ];

var paragraph = document.getElementById('adviceHere');
var adviceButton = document.getElementById('AdviceClicker')


adviceButton.onclick = function(){
  paragraph.textContent = myAdviceList[randomize()];
}

function randomize() {
  var randomNum = Math.floor( Math.random() * myAdviceList.length);
  return randomNum;
}
