"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Carlo Catlett
      Date: 4/6/2023

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");
   e.preventDefault();

   let regex1 = /[A-Z]/;

   let regex2 = /\d/;

   let regex3 = /[!\$#%]/

   if(pwd.length < 8){
      feedback.textContent ="Your password must be at least 8 charecters."
   }
   else if (!regex1.test(pwd)){

      feedback.textContent="Your password does not contain an uppercase letter"
   }
   else if (!regex2.test(pwd)){
      
      feedback.textContent="Your password does not contain a number"
   }
   else if (!regex3.test(pwd)){
      
      feedback.textContent="Your password does not contain any special charecters"
   }
   else{
      signupForm.submit();
   }
}
);
