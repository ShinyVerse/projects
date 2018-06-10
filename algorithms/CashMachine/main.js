function checkCashRegister(price, cash, cid) {
  var thisCash = price.toFixed(2);
  var thisPrice = cash.toFixed(2);
  var register = cid;
  var change = thisPrice - thisCash;
  change = Number(change.toFixed(2));
  var worth = [
    0.01,
    0.05,
    0.10,
    0.25,
    1,
    5,
    10,
    20,
    100
  ];
  var howManyCoins = [];
  var objReturn = {
    status: "",
    change: []
  };
  var changeList = {}


  // convert coin total to how many of type are available.
  for (var i = 0; i < register.length; i++) {
    // console.log(cid[i][1]);
    var actualCoins = Math.ceil(register[i][1] / worth[i]);
    howManyCoins.push({"coin": register[i][0], "amount": actualCoins});
  }

  function checkingRegister() {
    if (change === 0) {
      if (checkCID()) {
        objReturn.status = "OPEN";
        return;
      }
    }
    if (100 <= change) {

      if (howManyCoins[8].amount > 0) {
        change = change - 100;
        change = Number(change.toFixed(2));
        changeList.HUNDRED = changeList.HUNDRED + 100 || 100;

        //objReturn["HUNDRED"] = objReturn["HUNDRED"] + 100 || 100;
        howManyCoins[8][1] = howManyCoins[8][1] - 1;
        checkingRegister();
      }

    }
    if (20 <= change) {

      if (howManyCoins[7].amount > 0) {
        change = change - 20;
        change = Number(change.toFixed(2));
        changeList.TWENTY = changeList.TWENTY + 20 || 20;
        howManyCoins[7].amount = howManyCoins[7].amount - 1;
        checkingRegister();
      }

    }
    if (10 <= change) {

      if (howManyCoins[6].amount > 0) {
        change = change - 10;
        change = Number(change.toFixed(2));
        changeList.TEN = changeList.TEN + 10 || 10;
        howManyCoins[6].amount = howManyCoins[6].amount - 1;
        checkingRegister();
      }

    }
    if (5 <= change) {

      if (howManyCoins[5].amount > 0) {
        change = change - 5;
        change = Number(change.toFixed(2));
        changeList.FIVE = changeList.FIVE + 5 || 5;
        howManyCoins[5].amount = howManyCoins[5].amount - 1;
        checkingRegister();
      }

    }
    if (1 <= change) {

      if (howManyCoins[4].amount > 0) {
        change = change - 1;
        change = Number(change.toFixed(2));
        changeList.ONE = changeList.ONE + 1 || 1;
        howManyCoins[4].amount = howManyCoins[4].amount - 1;
        checkingRegister();
      }

    }
    if (0.25 <= change) {

      if (howManyCoins[3].amount > 0) {
        change = change - 0.25;
        change = Number(change.toFixed(2));
        changeList.QUARTER = changeList.QUARTER + 0.25 || 0.25;
        howManyCoins[3].amount = howManyCoins[3].amount - 1;
        checkingRegister();
      }

    }
    if (0.10 <= change) {

      if (howManyCoins[2].amount > 0) {
        change = change - 0.10;
        change = Number(change.toFixed(2));
        changeList.DIME = changeList.DIME + 0.10 || 0.10;
        howManyCoins[2].amount = howManyCoins[2].amount - 1;
        checkingRegister();
      }

    }
    if (0.05 <= change) {

      if (howManyCoins[1].amount > 0) {

        change = change - 0.05;
        change = Number(change.toFixed(2));
        changeList.NICKEL = changeList.NICKEL + 0.5 || 0.5;

        howManyCoins[1].amount = howManyCoins[1].amount - 1;
        checkingRegister();
      }

    }
    if (0.01 <= change) {

      if (howManyCoins[0].amount > 0) {
        change = change - 0.01;
        change = Number(change.toFixed(2));
        var newAmount = changeList.PENNY + 0.01 || 0.01;
        changeList.PENNY = Number(newAmount.toFixed(2));
        howManyCoins[0].amount = howManyCoins[0].amount - 1;
        checkingRegister();
      }
    }

    if (change === 0) {
      if (checkCID()) {
        objReturn.status = "OPEN";
      }
      if (change === 0){
        if (!checkCID()){
          objReturn.status = "CLOSED";
        }
      }
    } else {
    objReturn.status = "INSUFFICIENT_FUNDS";}
  }

  checkingRegister();

  function checkCID() {
    var keepOpen = [];
    for (var i = 0; i < howManyCoins.length; i++) {
      if (howManyCoins[i].amount > 0) {
        keepOpen.push("yes");
      } else {
        keepOpen.push("no");
      }
      var truth = function(element) {
        // checks whether an element is true
        return element === "yes";
      };
      return keepOpen.some(truth);
    }
  }
  console.log(changeList);

  function makeArray() {
    var numOfKeys = Object.keys(changeList).length;
    for (var i = 0; i < numOfKeys; i++) {
      // console.log("LOG: " + [Object.keys(objReturn)[i] + " " +   Object.values(objReturn)[i]]);
      objReturn.change.push([
        Object.keys(changeList)[i],
        Object.values(changeList)[i]
      ]);
    }
  }

makeArray();


if (objReturn.status === "INSUFFICIENT_FUNDS"){
  objReturn.change = [];
}
if (objReturn.status === "CLOSED"){
  objReturn.change = cid;
}
  //   console.log("FINAL: " + change);
  // console.log("FINAL::");
  // var cutDownObj = { status: objReturn.status };
  return objReturn;
  // Here is your change, ma'am.
}
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

// function checkingRegister() {
//    console.log( howManyCoins);
//     if ( 0.25  <= change ) {
//
//       if ( howManyCoins[3].amount > 0){
//         change = change - 0.25;
//         objReturn.QUARTER = objReturn.QUARTER + 0.25 || 0.25;
//         howManyCoins[3][1] = howManyCoins[3][1] - 1;
//         console.log("change: " +change);
//         console.log(objReturn);
//         checkingRegister();
//       }
//
//     }
// }
