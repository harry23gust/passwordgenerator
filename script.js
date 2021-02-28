// Set static variables
  
var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symArr = sym.split("");

//  Prompt instruction for the user to begin

window.onload = alert("Welcome! Please click 'Generate password' to start!");

// Main function = Password Generation

function generatePass(){
 var allChars = [];
 var resultPass = "";

// Set dynamic variables

 var passwordLenght = prompt("How long do you want your password to be?");

 if(passwordLenght <8 || passwordLenght > 128){
     alert("Your password shoulkd be  between 8 and 128 characters long!\nTry again.");
 }

// Confirm the rest of character conditions
 
 else{
     if(confirm("Do you want to include Upper letters?")){
         Array.prototype.push.apply(allChars, abcUpperArr);
     }

     if(confirm("Do you want to include lower case letters?")){
         Array.prototype.push.apply(allChars, abcLowerArr);
     }

     if(confirm("Do you want to include numbers?")){
         Array.prototype.push.apply(allChars, numArr);
     }

     if(confirm("Do you want to include symbols?")){
         Array.prototype.push.apply(allChars, symArr);
     }

     if(allChars.length===0){
         alert("You must select at lease 1 type of characters to generate a password!\nPlease start over.");
     }

// Run for loop to use confirmed information and generate password as a result

     else{
         for(var i=0; i<passwordLenght; i++){
             var random = Math.floor(Math.random()*allChars.length);
             resultPass += allChars[random];
         }
     }
     }

// Display the result

     document.getElementById("password").innerHTML = resultPass;
}

// Bonus! function to copy password to clipboard

function copyPass(){

 document.querySelector("textarea").select();
 document.execCommand("Copy");
 alert("Password copied to clipboard!");
}
