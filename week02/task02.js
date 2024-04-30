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



        
        
       
       
        