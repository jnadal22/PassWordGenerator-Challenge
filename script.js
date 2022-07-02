// Assignment Code
var generateBtn = document.querySelector("#generate");

// send user prompts:
// would they like to generate a new password?
// pick a number between 8 - 128
// would they like to inlcude lowercase characters?
// would they like to inclue uppercase characters?
// would you like numbers?
// would they like special characters?
// once all prompts are answered password should generate
// window alert user of new password
var inputArray = {
  lowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
 
  upperCase: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
 
  numberArray: ["0","1","2","3","4","5","6","7","8","9"],
 
 specialCharacters: ['!', '@', '#', '$', '%', '&', '*', '()', '+', '=', '[', ']', '{', '}'],
 };
   


function generatePassword(){
  console.log("how long would you like your password to be?");
  let passWordLength =  parseInt(window.prompt("how long would you like your password tobe?" + "please choose a number between 8 - 128"),10);
  if(passWordLength < 8 ){
    alert("password length has to be at least 8 characters, try again!");
    return "password not generated";
  }
 
  if(passWordLength > 128 ){
    alert("password length has to be at most 128 characters, try again!");
    return "password not generated";
  }


  var possiblePasswordCharacters = []; 
  console.log("possiblePasswordCharacters = ",possiblePasswordCharacters);
  

  console.log(passWordLength);

  let lowerCase = window.confirm("would you like lowercase characters?");
  console.log(lowerCase);
  
  let upperCase = window.confirm("would you like upperCase characters?");
  console.log(upperCase);
  
  let numericCharacters = window.confirm("would you like numeric characters?");
  console.log(numericCharacters);
  
  let specialCharacters = window.confirm("would you like special characters?");
  console.log(specialCharacters);
if(lowerCase === false && upperCase === false && numericCharacters === false && specialCharacters === false){
  alert("you need to include at lease one character type to generate password");
  return "password not generated";
}

  
    if(lowerCase === true); {
    possiblePasswordCharacters = possiblePasswordCharacters.concat(inputArray.lowerCase);
    console.log("possiblePasswordCharacters = ",possiblePasswordCharacters);
    } 
      (upperCase === true);{
        possiblePasswordCharacters = possiblePasswordCharacters.concat(inputArray.upperCase);
        console.log("possiblePasswordCharacters = ",possiblePasswordCharacters);
      }
     
      (numericCharacters === true);{
        possiblePasswordCharacters = possiblePasswordCharacters.concat(inputArray.numberArray);
        console.log("possiblePasswordCharacters = ",possiblePasswordCharacters);
      }
     
      (specialCharacters === true);{
        possiblePasswordCharacters = possiblePasswordCharacters.concat(inputArray.specialCharacters);
        console.log("possiblePasswordCharacters = ",possiblePasswordCharacters);
      }
      var password = "";
      for (let i = 0; i < passWordLength; i++){
        password += possiblePasswordCharacters[Math.floor(Math.random() * possiblePasswordCharacters.length)];
      }
      console.log ("password = ", password );
    
};




// send prompts asking how long would they like their password tobe between 8-128 characters
// Ask if they would like lowercase characters, Uppercase characters, 

// Write password to the #password input

function writePassword() {
  console.log("enter the right password function");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  

  

  }

  
  








// Add event listener to generate button
generateBtn.addEventListener("click", function(){

  writePassword();
}
);

