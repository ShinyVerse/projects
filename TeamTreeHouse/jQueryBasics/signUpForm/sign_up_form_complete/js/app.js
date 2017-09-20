//Problem: hints are shown even when form is valid
//sollution: hide and show them at appropriate times

var $password = $("#password");
var $confirmPassword = $("#confirm_password");
//hide spans
$("form span").hide();

function isPasswordValid() {
  return ($password.val().length >= 8);
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function passwordEvent() {
  /*This = #password  $(this).val().length; */
  // if password is valid
  if (isPasswordValid()) {
    $password.next().hide()
  } else {
    $password.next().show();
  }
}

function canSubmit(){
  return isPasswordValid() && arePasswordsMatching()
}

function enableSubmitEvent(){
  $("#submit").prop("disabled", !canSubmit());
}

//when event happens on password input
$password.on("focus", passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

function confirmPasswordEvent() {
  //find out if password and confirmation match
  if (arePasswordsMatching()) {
    //hide hint if matched
    $confirmPassword.next().hide()
  } else {
    //else show the hint
    $confirmPassword.next().show();
  }
}
//when event happens on confirmation
$confirmPassword.on("focus", confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
