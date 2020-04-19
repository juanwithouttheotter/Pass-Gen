//function that generates the random password
function passwordGen() {
  var characters = genPossibleCharacters(possibleCharacters);
  var length = genPasswordLength(passwordLength);
  var result = '';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  passwordText.value = result
  return result;
}

// variable that stores the characters to be used in the password
var possibleCharacters = '';
//prompts that add the characters to be used for the password to possibleCharacters
function genPossibleCharacters(possibleCharacters) {
  while (possibleCharacters === '') {
    var numCrit = confirm('Do you want to use numbers in your password?');
    if (numCrit === true) {
      possibleCharacters = possibleCharacters + '0123456789';
    }
    var capCrit = confirm('Do you want to use Capital letters in your password?');
    if (capCrit === true) {
      possibleCharacters = possibleCharacters + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    var lowCrit = confirm('Do you want to use lowercase letters in your password?');
    if (lowCrit === true) {
      possibleCharacters = possibleCharacters + 'abcdefghijklmnopqrstuvwxyz';
    }
    var specCrit = confirm('Do you want to use special characters in password?');
    if (specCrit === true) {
      possibleCharacters = possibleCharacters + '\!\%\*\@\$\#\^\*\&\'\(\)\+\-\;\:\<\.\/\=\>\?\[\]\_\`\{\|\}\~\\';
    }
  }
  return possibleCharacters;
}

//Set to 0 to start the while loop
var passwordLength = 0
//Prompts user to select a length within 8 and 128
function genPasswordLength(passwordLength) {
  while (passwordLength < 8 || passwordLength > 128) {
    var passwordLength = prompt('Please choose the length of your password between 8 and 128 characters in Length');
  }
  return passwordLength;
}


var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Add event listener to generate button

generateBtn.addEventListener("click", passwordGen);
