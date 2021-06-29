/* ----------------
Function that return an image on the gallery based on what user types
----------------- */

function search() {

  const userInput = document.getElementById('search'); // Get the user input
  const inputLower = userInput.value.toLowerCase(); // Transform the user input in lower case
  const ul = document.getElementById("ul"); // Get the HTML tag ` ul `
  const li = ul.getElementsByTagName("li"); // Get the HTML tag ` li `

  for (i = 0; i < li.length; i++) {

      aTag = li[i].getElementsByTagName("a")[0]; // Loops trough all list items
      caption = aTag.getAttribute('data-caption'); // Get the ` data-caption ` attribute from  ` a ` tag
  
      if (caption.toLowerCase().indexOf(inputLower) > -1) { // Check if userInput is contained inside data-caption string
          li[i].style.display = ""; //
      } else {
          li[i].style.display = "none";
      }
  }

}

