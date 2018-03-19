var months = {
  "0": "Were not in January.",
  "1": "Were not in Febuary.",
  "2": "Were not in March.",
  "3": "Were not in April.",
  "4": "Were not in May.",
  "5": "Were not in June.",
  "6": "Were not in July.",
  "7": "Were not in August.",
  "8": "Were not in September.",
  "9": "Were not in October.",
  "10": "Were not in November.",
  "11": "Were not in December."
};


function setCorrectMonth(){
  var day = new Date();
  var month = day.getMonth();
  months[month] = "hello";
}

var shoppingList = {
  "eggs": 0,
  "chocolate": 0,
  "potatoes": 0
};

function getThis(item){
  shoppingList[item] = shoppingList[item] + 1;
}
