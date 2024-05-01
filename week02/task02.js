//task 1
let text = '<i>Text</i>'
elem1.append(document.createTextNode(text))
elem2.innerHTML = text
elem3.textContent = text

//======Task 2
function clear(elem) {
    let test = document.getElementById('elem')
    test.innerHTML = ''
}
clear()

//======Task 3
//alert(table)
table.remove()

//=======Task 4
let ul = document.createElement("ul"); // this has to be outside the function, otherwise every time an item gets entered it creates a new <ul>
displayItems.append(ul); 
function enterItem() {
    let question = prompt("Please enter your item");
    
    
    if (question === null || question === "") {
      alert('Please enter an item.');
    
    }
    let li = document.createElement('li')
    
    
    li.textContent = question;
    ul.append(li)
}
let btn = document.getElementById("btn");
btn.addEventListener('click', (enterItem))

//=======Task 5
let data = {
  Fish: {    // -> Obj key
    trout: {},
    salmon: {},
  },

  Tree: {
    // -> Obj key
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};


function createTree(container, obj){
  container.innerHTML = createTreeText(obj)
}
function createTreeText(obj) {
  let li = "";
  let ul = "";
  for (let key in obj) {
    li += "<li>" + key + createTreeText(obj[key]) + "</li>"; // Access the ojb value store in that key, like an index
  }
  if (li) {
    // This if checks if li is empty
    ul = "<ul>" + li + "</ul>"; // wraps the string li in a ul tag
  }
  return ul || ""; // This approach ensures that the function always returns a non-empty string, even if there are no nested items.
}
createTree(container, data);

//Practicing
let atTheEnd = "atTheEnd";
let atTheBeginning = "atTheBeginning";
let c = document.createElement('div');
c.append(atTheEnd)
c.prepend(atTheBeginning)
console.log(c)
test.insertAdjacentHTML('beforebegin', 20)

//Task06
let lis = document.getElementsByClassName('parentli') // Selects all elements with that class name.
for (li of lis) { // pra cada li encontrado in lis, ou seja, ja estamos skipping the all the first li. This method will select all the children li descent of the li found in lis.
  let descendent = li.getElementsByTagName('li').length// How many li descent
  if (!descendent) continue // If its not empty continue

  li.firstChild.data += `[${descendent}]` // call firstChild. The .data inserts the value straight into the HTML next to the first child, data does not need to be declared or retrieved.
}

//Task07
function createCalendar(elem, year, month) {
  // Define the names of weekdays
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Create the table structure
  let calendarHTML = "<table><tr>";

  // Create table header with weekday names
  for (let day of weekdays) {
    calendarHTML += `<th>${day}</th>`;
  }
  calendarHTML += "</tr><tr>";

  // Create the date object for the first day of the month
  let d = new Date(year, month - 1);
  let firstDayOfWeek = (d.getDay() + 6) % 7; // Adjust to start from Monday. d.getDay returns 1 +6 = 7, 7%7 = 0, which sets 0(monday)as the first day of the week, instead of starting at 0(sunday)
 
  // Fill in empty cells before the first day of the month
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarHTML += "<td></td>";
  }
console.log(d.getMonth());
  // Loop to create cells for each day of the month
  while (d.getMonth() + 1 === month) {
    // Add the day to the calendar
    calendarHTML += `<td>${d.getDate()}</td>`;

    // Check if it's Sunday, then add a new table row
    if (d.getDay() === 0 && d.getDate() !== 1) {
      calendarHTML += "</tr>";
    }

    // Move to the next day
    d.setDate(d.getDate() + 1);
  }

  // Check if the last row is not yet full and add empty cells
  if (d.getDay() !== 0 && (d.getMonth() ===30) || d.getMonth() === 31) {
    for (let i = d.getDay(); i < 7; i++) {
      calendarHTML += "<td></td>";
    }
  }

  // Close the table structure
  calendarHTML += "</tr></table>";

  // Set the HTML of the specified element to the calendarHTML
  elem.innerHTML = calendarHTML;
}

// Example usage:
// Create a calendar for September 2012 and insert it into an element with id "calendar"
createCalendar(document.getElementById("calendar"), 2012, 9);


//Local storage test
// localStorage.setItem("test", 1);   
// alert(localStorage.getItem("test"));     

// for (let i = 0; i < localStorage.length; i++) {
//   let key = localStorage.key(i);
//   alert(`${key}: ${localStorage.getItem(key)}`);
// }
// for (let key in localStorage) {
//   if (!localStorage.hasOwnProperty(key)) {
//     continue; // skip keys like "setItem", "getItem" etc
//   }
//   alert(`${key}: ${localStorage.getItem(key)}`);
// }
// localStorage.user = { name: "John" };
// alert(localStorage.user); // [object Object]

// //localStorage.user = JSON.stringify({ name: "John" }); // user: {"name":"John"}
// localStorage.user = JSON.stringify({name: "John"});

// // sometime later
// let user = JSON.parse( localStorage.user );
// alert( user.name ); // John

// sessionStorage.setItem("test", 1);
// alert(sessionStorage.getItem("test"));

// triggers on updates made to the same storage from other documents
window.onstorage = event => { // can also use window.addEventListener('storage', event => {
  if (event.key != 'now') return;
  alert(event.key + ':' + event.newValue + " at " + event.url);
};

localStorage.setItem('now', Date.now());