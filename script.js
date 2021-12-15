// Assignment Code
var generateBtn = document.querySelector("#generate");

//var passwordLength = prompt("Enter password length");
/*creating an empty character set and all potential charcter set to add to a string based on user preference*/
var charset_initial =""
var charset_lowercase="qwertyuiopasdfghjklzxcvbnm"
var charset_uppercase="QWERTYUIOPASDFGHJKLZXCVBNM"
var charset_numbers="1234567890"
var charset_special ="`~!@#$%^&*()-_=+[{]}|:<,>.?/"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
/*creating the generate password function that filters through the character sets*/
function generatePassword() {
  var randomPassword = ""
  let charset_final = charset_initial;
  var password_length = prompt("enter your password length between 8-128");
  
  /*while (password_length < 8 || password_length > 128){
    password_length = prompt("enter your password length between 8-128");
  }*/ 

  // alerts user if the input value is not between 8 and 128
  if (password_length < 8 || password_length > 128){
    alert("please enter a value between 8-128 characters") 
    // will rerun function is above is not meet
  return generatePassword();

  }
  //prompts user if they would like the following character sets
  var AddLowercase = confirm("would you like the password to contain lowercases")
  if (AddLowercase == true) {
  charset_final = charset_initial + charset_lowercase
  }

  var AddUppercase = confirm("would you like the password to contain uppercases")
  if (AddUppercase == true) {
    charset_final = charset_final + charset_uppercase
  }

  var AddNumber = confirm("would you like the password to contain numbers")
  if (AddNumber == true) {
    charset_final = charset_final + charset_numbers
  }

  var AddSymbol = confirm("would you like the password to contain symbols")
  if (AddSymbol == true) {
    charset_final = charset_final + charset_special
  }
  //randomly selects from the final charset string up to the desired length of password to form the product//
  for (i=0;i<password_length;i++){
    var randomNumber = Math.floor(Math.random() * charset_final.length);
    randomPassword += charset_final[randomNumber]
    console.log(randomPassword)
  }
return randomPassword
console.log(randomPassword)
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
