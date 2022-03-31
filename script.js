// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  // TODO: add code to generate the password here
  var charnumber = window.prompt("Enter how many characters 8-120");
  var lowercase = window.confirm("Would you like lowercase?");
  var uppercase = window.confirm("Would you like uppercase?");
  var number = window.confirm("Would you like numbers?");
  var special = window.confirm("Would you like special characters?");
  var randochar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*&*(/?";

  
  for (var i = 0; i < charnumber; i++) {
    password += randochar.charAt(Math.floor(Math.random() * randochar.length));
  

  
  }
  return password;





}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);