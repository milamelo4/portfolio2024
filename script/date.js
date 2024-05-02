// let currDate = new Date()
const now = Date.now(); // derive the current date using a date object
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);

//Last updated 
const date2 = document.querySelector("#date2");
date2.innerHTML = new Date(document.lastModified).toLocaleDateString("en-US");
document.getElementById("date1").innerHTML = fulldate;

// Wait for the DOM content to load
// document.addEventListener("DOMContentLoaded", function() {
//     // Check if there are script tags in the HTML
//     var scripts = document.querySelectorAll("footer");
//     if (scripts.length > 0) {
//         // Loop through each script tag
//         scripts.forEach(function(script) {
//             // Get the parent element of the script tag (which could be the body or another element)
//             var parentElement = script.parentElement;
//             console.log(parentElement)
//             // Check if the parent element is a footer
//             if (parentElement.tagName.toLowerCase() === "footer") {
//               // Create a new element for the source
//               var sourceElement = document.createElement("a");
//               // Set the link text and href attribute
//               linkElement.textContent = "Source";
//               linkElement.href = "https://javascript.info/modifying-document";
//               // Append the source element to the footer
//               parentElement.appendChild(sourceElement);
//             }
//         });
//     }
// });

// Select all footer elements in the document
var footers = document.querySelectorAll("footer");

// Loop through each footer element
footers.forEach(function(footer) {
    // Find the <p> tag inside the current footer
    var paragraph = footer.querySelector("p");
    if (paragraph) { // Check if a <p> tag exists in the footer
        // Create a new anchor element for the link
        var linkElement = document.createElement("a");
        // Set the link text and href attribute
        linkElement.textContent = "| Source";
        linkElement.href = "https://javascript.info/modifying-document";
        // Append the link element to the <p> tag
        paragraph.appendChild(linkElement);
    }
});