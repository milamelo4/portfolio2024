let div = document.createElement('div')
let textNode = document.createTextNode('Here I am');
div.appendChild(textNode)
document.body.prepend(div)

div.className = 'alert'
div.innerHTML = `<strong>Hi there!</strong> You've read an important message.`;


// Interesting that I didn't have to declared the <ol> or add an element by tag or ID, BUT... know that the ol bellow its not referenced to the tag <ol>, instead that is the id I declared in the HTML file, if I remove the id='ol' the code will give an error that the ol hasn't been defined. The code bellow add the word before, right before the list starts, and the word after right after the list ends. Both jumping one line, as if it was a block element. Update: I guess this works because I probably have a bundler that understands to look in HTML file to look up for the id.
ol.before('before')
ol.after('after')

// This next block of line creates an extra <li> with the text message Appended. Then append as the first item in the list by using .prepend.
let liFirst = document.createElement('li')
let liLast = document.createElement("li");
liFirst.innerHTML = 'At beginning'
liLast.innerHTML = 'At the end'
ol.prepend(liFirst)
ol.append(liLast)
div.before(`<p>Hello</p>`, document.createElement('hr')) // This will go as a text not HTML

//InertAdjacentHTML

aside.insertAdjacentHTML('beforebegin', `<p>Hello!! I'm an &lt;p&gt; element created in JS, inserted before the tag aside using beforebegin method.</p>`)
aside.insertAdjacentHTML('afterend', `<p><strong>Bye!!!</strong> InnerHTML created in JS inserted after the tag &lt;aside&gt; using method afterend.</p>`)

aside.insertAdjacentHTML(
  "afterbegin",
  "<p>Im a &lt;p&gt; tag created in JS. This message is appended inside the &lt;aside&gt; tag, as a direct child tag.</p>"
);

aside.insertAdjacentHTML('afterend', '<h5>') // -> Creates a h5 tag right after the aside tag.

// Node Removal
let div2 = document.createElement('div')
div2.className = 'alert2'
div2.innerHTML = `<strong>Hi there!</strong> You've read another important message`
document.body.append(div2)

setTimeout(() => div2.remove(), 1000) // function to schedule the removal of an HTML element from the DOM after a specified delay.

second.after(first) // second and first are class names declared in HTML. Here we are swapping elements position.

// Cloning nodes: cloneNode
let divs = div3.cloneNode(true) // clone the message
divs.innerHTML = 'bye' // change the clone
div3.after(divs) // show the clone after the existing div

// Document Fragment    The book example was a bit diff than my solution
function getList() {
  let fragment = new DocumentFragment();
  for (let i = 0; i <= 3; i++) {
    let li = document.createElement("li");
    li.append(i);
    fragment.append(li);
    ul2.append(fragment);   // In the example remove this line
  }
  return fragment;
}
getList(); // add this line: ul2.append(getList())
// Method bellow is used more often
function getList2() {
    let results = []
    for (let i=0;i<=3;i++) {
        let li = document.createElement('li')
        li.append(i)
        results.push(li)
    }
    return results
}
//console.log(getList2())
let listItems = getList2();
listItems.forEach((item) => ul4.append(item)); // loops through each li. Just to print as a list in HTML.
