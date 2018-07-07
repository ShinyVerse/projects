var employeeTotal = document.getElementsByClassName("total")[0];
var traitButtons = document.getElementsByClassName("btn__add");
var dreamEmployee = new Employee();

(function addButtonFunction(){
  for (let i= 0; i < traitButtons.length; i++){
    traitButtons[i].addEventListener("click", function(){
      addToCost(traitButtons[i].innerHTML, dreamEmployee);
    });
  }
})();

function printTotalToScreen(amount){
   employeeTotal.innerHTML = "£" + amount;
}

function addToCost(string, dreamEmployee){
  switch(string) {
    case "Add<br> Intelligence!":
        addIntelligence(dreamEmployee);
        printTotalToScreen(dreamEmployee.salary());
        break;
    case "Add<br> Leadership!":
        addLeadership(dreamEmployee);
        printTotalToScreen(dreamEmployee.salary());
        break;
      case "Add<br> Energy!":
        addHighEnergy(dreamEmployee);
        printTotalToScreen(dreamEmployee.salary());
        break;
    case "Add<br> Kindness!":
        addCaring(dreamEmployee);
         printTotalToScreen(dreamEmployee.salary());
        break;
      case "Add<br> Humor!":
       addHumor(dreamEmployee);
       printTotalToScreen(dreamEmployee.salary());
        break;
    case "Add<br> Mentoring!":
       addMentorship(dreamEmployee);
      printTotalToScreen(dreamEmployee.salary());
        break;
    default:
       alert("error");
}
};


// The constructor to decorate
function Employee() {

  this.salary = function () { return 20000; };
  this.traits = function () { return 0; };

}

function addIntelligence( employee ) {
  var prevSalary = employee.salary();
  employee.salary = function() {
    return prevSalary + 10000;
  };

}

function addLeadership( employee ){

  var prevSalary = employee.salary();
  employee.salary = function() {
    return prevSalary + 20000;
  };

}

function addHighEnergy( employee ){

  var prevSalary = employee.salary();
  employee.salary = function() {
    return prevSalary + 20000;
  };
}

function addCaring( employee ){

  var prevSalary = employee.salary();
  employee.salary = function() {
    return prevSalary + 10000;
  };
}
function addHumor( employee ){
  var prevSalary = employee.salary();
  employee.salary = function() {
    return prevSalary + 5000;
  };
}

function addMentorship( employee ){

  var prevSalary = employee.salary();
  employee.salary = function() {
    return prevSalary + 15000;
  };
}
