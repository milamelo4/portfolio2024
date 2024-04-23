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
