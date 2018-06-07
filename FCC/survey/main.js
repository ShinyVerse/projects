// var nameField = document.getElementById('name');
// var ageField = document.getElementById('number');
// var emailField = document.getElementById('email');
// var reg = new RegExp('^[0-9]+$');
// var regEmail =  new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}');
//
// //// EMAIL VALIDATOR ONLY
// // function validateEmail(){
// //   var that = event.target;
// //   if (regEmail.test(event.target.value)){
// //     setAttrForTrueOrFalse(that, true);
// //     return true;
// //   } else {
// //     setAttrForTrueOrFalse(that, false);
// //     return false;
// //   }
// //   if (!validator) {
// //     setAttrForTrueOrFalse(that, false);
// //     return false;
// //   } else {
// //     setAttrForTrueOrFalse(that, true);
// //     return true;
// //   }
// // }
//
//
// //// AGE VALIDATOR ONLY
//  function validateAge(){
//    var that = event.target;
//    if (event.target.value > 0 && event.target.value < 115 ){
//      setAttrForTrueOrFalse(that, true);
//      return true;
//    } else {
//        setAttrForTrueOrFalse(that, false);
//        return false;
//      }
//  }
//
// // function validateAge(){
// //   var that = event.target;
// //   if (reg.test(event.target.value) && event.target.value <= 115){
// //     setAttrForTrueOrFalse(that, true);
// //     return true;
// //   } else {
// //     setAttrForTrueOrFalse(that, false);
// //     return false;
// //   }
// //   if (!validator) {
// //     setAttrForTrueOrFalse(that, false);
// //     return false;
// //   } else {
// //     setAttrForTrueOrFalse(that, true);
// //     return true;
// //   }
// // }
//
// //// NAME VALIDATOR ONLY
// function validateName() {
//   var that = event.target;
//   if (event.target.value){
//     setAttrForTrueOrFalse(that, true);
//     return true;
//   }else {
//     setAttrForTrueOrFalse(that, false);
//     return false;
//   }
//   // var that = event.target;
//   // if (reg.test(event.target.value)) {
//   //   setAttrForTrueOrFalse(that, false);
//   //   return false;
//   // }
//   // if (event.target.value.length === 0) {
//   //   setAttrForTrueOrFalse(that, false);
//   //   return false;
//   // }
//   // if (!validator) {
//   //   setAttrForTrueOrFalse(that, false);
//   //   return false;
//   // } else {
//   //   setAttrForTrueOrFalse(that, true);
//   //   return true;
//   // }
// }
//
//
// /// GENERAL VALIDATORS === MULTI USE ///
// function setAttrForTrueOrFalse(item, setAttr) {
//   if (setAttr) {
//     item.setAttribute("class", "complete");
//   } else {
//     item.setAttribute("class", "error");
//   }
// }
//
// function validator() {
//   switch (event.target.value) {
//     case undefined:
//     case " ":
//     case "":
//       return false;
//     default:
//       return true;
//   }
// }
//
// ////////////
// nameField.onblur = validateName;
// ageField.onblur = validateAge;
//  // emailField.onblur = validateEmail;
//
// // nameField.onchange = function(event) {
// //   console.log(event.target.value);
// // }
