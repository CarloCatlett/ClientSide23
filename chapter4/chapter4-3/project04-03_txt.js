/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment
      Author: Carlo Catlett
      Date: 02/26/2023

      Filename: project04-03.js
*/

// Maximum Length of Review
const MAX_REVIEW = 100;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elemets in the web page
wordCountBox = document.getElementById("countValue");
warningBox = document.getElementById("warningBox");


// Event listener for typing into the comment box
document.getElementById("comment").addEventListener("keyup", updateCount);

// Event listener for loading the page
window.addEventListener("load", function() {
  // Initialize wordCountBox and warningBox variables
  wordCountBox = document.getElementById("countValue");
  warningBox = document.getElementById("warningBox");
  
  // Initialize commentText variable
  commentText = document.getElementById("comment").value;
  
  // Update character count
  updateCount();
});

// Function to update the count with each keyup event
function updateCount() {
   
   
   // Count the number of characters in the comment box
   commentText = document.getElementById("comment").value;
   charCount = countCharacters(commentText);
   
   // Update the word count box
   wordCountBox.innerHTML = charCount;

   // Set the warning box to an empty text string 
  if(charCount > MAX_REVIEW)
  {
    warningBox.innerHTML = "You have exceeded the character count limit";
  }
  else
  { warningBox.innerHTML = "";}
 }

// Function to count the number of characters in a text string
function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}
