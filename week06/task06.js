

//My solution:
  let selected = Array.from(genres.options)

    .filter(option => option.selected) // This will convert each option element to true or false (based on whether the option is selected). This means the new array will be an array of boolean values.
    .map(option => option.value);
  let classic = new Option('Classic', 'Classic', true, true)
  genres.append(classic)  
  console.log(selected[0])
 

//   Example solution
//   let selectedOption = genres.options[genres.selectedIndex];
//   console.log( selectedOption.value );

//   // 2)
//   let newOption = new Option("Classic", "classic");
//   genres.append(newOption);

//   // 3)
//   newOption.selected = true;

//Task reading 2
function showCover() {
    let cover = document.createElement('div')
    cover.id = 'cover-div'
    //document.body.style.overflowY = "hidden";
    document.body.append(cover)
   
}
function hideCover() {
   document.getElementById('cover-div').remove()
    //document.body.style.overflowY = "";
}
function showPrompt(html, callback) {
    showCover();
    let form = document.getElementById('prompt-form')
    let container = document.getElementById("prompt-form-container");
    document.getElementById("prompt-message").innerHTML = html
    form.text.value = ''

    function complete(value) {
        hideCover()
        container.style.display = 'none'
        document.onkeydown = null
        callback(value)
    }

    form.onsubmit = function () {
      let value = form.text.value;
      if (value == "") return false;
      complete(value);
      return false;
    };
    form.cancel.onclick = function (e) {
      if (e.key == "Escape") {
        complete(null);
      }
    };
    let lastElem = form.elements[form.elements.length - 1] //Last element inside the <form>
    let firstElem = form.elements[0]
    keyDown(lastElem)
    keyDown(firstElem)
   
    container.style.display = 'block'
    form.elements.text.focus()
}


document.getElementById('show-button').onclick = function(){
    showPrompt("Enter something<br>...smart :)", function (value) {
      alert(value);
    });
}

function keyDown(e, element) {
    if (e.key == 'Tab' && !e.shiftKey) {
        element.focus()
        return false
    }
}

