// let currDate = new Date()
const now = Date.now(); // derive the current date using a date object
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);

//Last updated 
const date2 = document.querySelector("#date2");
date2.innerHTML = new Date(document.lastModified).toLocaleDateString("en-US");
document.getElementById("date1").innerHTML = fulldate;
