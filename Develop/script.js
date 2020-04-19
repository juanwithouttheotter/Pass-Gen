//function that generates the random password
function passwordGen() {
  var characters = genPossibleCharacters(possibleCharacters);
  var length = genPasswordLength(passwordLength); 
  var result = '';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// variable that stores the characters to be used in the password
var possibleCharacters = '';
//prompts that add the characters to be used for the password to possibleCharacters
function genPossibleCharacters(possibleCharacters) {
  while (possibleCharacters === '') {
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
  }
  return possibleCharacters;
}

//Set to 0 to start the while loop
var passwordLength = 0
//Prompts user to select a length within 8 and 128
function genPasswordLength(passwordLength) {
  while (passwordLength < 8 || passwordLength > 128) {
    var passwordLength = prompt('Please choose the length of your password between 8 and 128');
  }
  return passwordLength;
}

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
//passwordText.value = passwordGen();  <--- better?
var password = passwordGen();
passwordText.value = password;


// Add event listener to generate button

generateBtn.addEventListener("click", passwordGen);
