// setTimeout (execucao de uma vez so. The 2000ms is the delay in which the msg will be fired)
// console.log('Antes do timeout') // 1
// setTimeout(function() {
//     console.log('testando') // 3 so depois de 2s
// },2000)
// console.log('Testando depois') // 2

//setInterval - Como um infinite loop, you must create a structure to stop
// setInterval(function() {
//     console.log('testando setInterval')
// }, 1000) the msf above will be pooping every sec

//clearTimeout clearInterval

var x = 0
//Its important to give the setTimeout a variable name to be able to use when calling the clearTimeout
var myTimer = setTimeout(function() {
    console.log('x = 0')
}, 1500)
x = 5
if (x > 0) {
  clearTimeout(myTimer);
  console.log("O x passou de 0");
  console.log(x);
}
let i = 0;


//Task02
var timeOut = setTimeout(() => alert(i), 100); // ?

//assume that the time to execute this function is >100ms
for (let j = 0; j < 100000000; j++) {
  i++;
}
clearTimeout(timeOut)

let timeId = setInterval(() => alert('tick'), 2000)
clearInterval(timeId)