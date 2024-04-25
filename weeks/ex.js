// Exe 01
let btn1 = document.getElementById('btn1')
btn1.addEventListener('click', ()=> {
    let vol = parseInt(document.getElementById("volume").value);
    let liter = vol * 0.946
    document.getElementById("res1").innerHTML = `${liter.toFixed(2)} liters`;
    
})

// Exe 02
function convertLt() {
    let disKilo = parseFloat(document.getElementById('distance').value)
    let disMiles = disKilo * 0.621
    document.getElementById('res2').innerHTML = `${disMiles.toFixed(2)} miles.`
} 
document.getElementById('btn2').addEventListener('click', (convertLt)) 

// Exe 03
function whichShoes() {
    let answer = document.getElementById('weather').value
    if (answer.length === 0) {
        alert('Invalid. Please choose an answer.')
    }
    let refined = answer.toLowerCase()
    let resu = choices(refined)
    
    function choices(weather) {
        let shoes = "";
        if (weather === "rain") {
          shoes += "Please wear galoshes.";
        } else if (weather === "hot") {
          shoes += "Please were sandals!";
        } else if (weather === "snow") {
          shoes += "Please wear boots.";
        } else {
          shoes += "Please choose one: rain, hot, or snow.";
        }
        return shoes
    }
    document.getElementById('res3').innerHTML = resu
   
}
document.getElementById("btn3").addEventListener("click", (whichShoes)); 

/* Arrays
 Exe 01*/
function altitudes(list,x) {
 
  for (i=0; i< list.length; i++) {
    list[i] = x
  }
  return list
  }
let l = new Array(20)

document.getElementById('btn4').addEventListener('click', () => {
  document.getElementById("res4").innerHTML = altitudes(l, 7);
})

// Exe 02
function mothersDay(y) {
  let daysList = []
  daysList.push(y);
  return daysList ;
   
}

document.getElementById('btn5').addEventListener('click', ()=> {
  document.getElementById("res5").innerHTML = mothersDay([1908, 5, 10]);
})

// Exe 03
function addEnds(list) {
  return list[0] + list[list.length - 1]
}
let list = [17, 8, 9, 5, 20];
let value = addEnds(list);
document.getElementById('btn6').addEventListener('click', () => {
  document.getElementById('res6').innerHTML = value 
})

// Exe 04
function getMiddle(list) {
  let mid = Math.floor((list.length -1) / 2)
  let average = 0;
  if (list.length % 2 == 0) {
    average = (list[mid] + list[mid + 1]) / 2
  }
  else {
    average = list[mid]
  }
  return average
}
let list2 = [17, 8, 9, 5, 20];
let value2 = getMiddle(list2);
let list3 = [12, 4, 8, 15, 17, 5, 20, 11];
let value3 = getMiddle(list3);


document.getElementById('btn7').addEventListener('click', () => {
  document.getElementById('res7').innerHTML = `${value2} <br> ${value3}`
})

// Exe 05
function countEvens(list) {
  let r = ''
  for (let i=0; i< list.length; i++) {
    if (list[i] % 2 != 0) {
      r += list[i] + '<br>'
    }
    
  }
  return r
 
}


let count = countEvens(list2);
document.getElementById('btn8').addEventListener('click', () => {
  document.getElementById('res8').innerHTML = count
})