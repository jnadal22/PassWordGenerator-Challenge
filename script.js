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

function generatePassword(){
  console.log("how long would you like your password to be?");
  let passWordLength = window.prompt("how long would you like your password tobe?" + "please choose a number between 8 - 128");
  
  var characterAmount = ""; 
  

  console.log(passWordLength);

  let lowerCase = window.confirm("would you like lowercase characters?");
  console.log(lowerCase);
  
  let upperCase = window.confirm("would you like upperCase characters?");
  console.log(upperCase);
  
  let numericCharacters = window.confirm("would you like numeric characters?");
  console.log(numericCharacters);
  
  let specialCharacters = window.confirm("would you like special characters?");
  console.log(specialCharacters);
};




// send prompts asking how long would they like their password tobe between 8-128 characters
// Ask if they would like lowercase characters, Uppercase characters, 

// Write password to the #password input

function writePassword() {
  console.log("enter the right password function");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var inputArray = {
    lowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
   
    upperCase: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
   'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' 
   ],
   numberArray: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
   
   specialCharacters: ['!', '@', '#', '$', '%', '&', '*', '()', '+', '=', '[', ']', '{', '}'],
   };
     



  for (let i = 0; i <  -1; i++){
    if(lowerCase === true); {
    characterAmount += getRandomLower(passWordCharacters);
    } 
      (upperCase === true);{
        characterAmount += getRandomUpper(passWordCharacters);
      }
     
      (numericCharacters === true);{
        characterAmount += getRandomNumer(passWordCharacters);
      }
     
      (specialCharacters === true);{
        characterAmount += getRandomsymbol(passWordCharacters);
      }
    }

  }

  
  






// function getRandomLower(){
// return String.fromCharCode = Math.floor(Math.random() * passWordCharacters);
// }

// function getRandomUpper(){
//   return String.fromCharCode = Math.floor(Math.random() * passWordCharacters);
// }

// function getRandomNumer(){
//   return String.fromCharCode = Math.floor(Math.random() * passWordCharacters);
// }

// function getRandomsymbol(){
//   return symbols = Math.floor(Math.random() * passWordCharacters);
// }

// Add event listener to generate button
generateBtn.addEventListener("click", function(){

  generatePassword();
}
);

