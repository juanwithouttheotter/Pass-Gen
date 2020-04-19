// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // variable that stores the characters to be used in the password
  var possibleCharacters = '';
  //prompts that add the characters to be used for the password to possibleCharacters
  var numCrit = confirm('Use numbers in password?');
  if (numCrit === true) {
    possibleCharacters = possibleCharacters + '0123456789';
  }
  var capCrit = confirm('Use Capital letters in password?');
  if (capCrit === true) {
    possibleCharacters = possibleCharacters + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  var lowCrit = confirm('Use Lowercase letters in password?');
  if (lowCrit === true) {
    possibleCharacters = possibleCharacters + 'abcdefghijklmnopqrstuvwxyz';
  }
  var specCrit = confirm('Use Special characters in password?');
  if (specCrit === true) {
    possibleCharacters = possibleCharacters + '\!\%\*\@\$\#\^\*\&\'\(\)\+\-\;\:\<\ \.\/\=\>\?\[\]\_\`\{\|\}\~\\';
  }
  //Set to 0 to start the while loop
  var passGen = 0
  //Prompts user to select a length within 8 and 128
  while (passGen < 8 || passGen > 128) {
    var passGen = prompt('Please choose the length of your password between 8 and 128');
  };
  console.log(passwordChar(passGen, possibleCharacters));
};


var passwordText = document.querySelector("#password");
var password = writePassword();
passwordText.value = password;

//function that generates the random password
function passwordChar(length, possibleCharacters) {
  var result = '';
  var charactersLength = possibleCharacters.length;
  for (var i = 0; i < length; i++) {
    result += possibleCharacters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
 



}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
