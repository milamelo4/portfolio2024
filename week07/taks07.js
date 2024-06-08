
let user = {
    name: "John",
    age: 30
}

user.sayHi = function() {
  console.log(`Hi ${user.name}`); // …But such code is unreliable.
}
// user.sayHi()
user.sayHi() // sayHi() is a method of the object user

// Accessing object properties with method "this"

let user2 = {
    name: "Mila",
    age: 43,
    sayHello() {
        console.log(`Hello ${this.name}`)
    }
}
user2.sayHello()

/* In JavaScript, methods are typically defined inside objects to be accessed as properties of those objects. This allows you to call the method using the object, like user2.sayHello(), where user2 is the object and sayHello is the method.

However, methods do not strictly have to be defined inside the object. You can define a function outside the object and then assign it as a method to the object. Here’s how you can do that: 
Example: */
/* function sayHello() {
    console.log(`Hello ${this.name}`);
}

let user2 = {
    name: "Mila",
    age: 43,
    sayHello: sayHello  Assigning the function as a method
};

user2.sayHello();   This will also work and console.log "Hello Mila" */


let user3 = { name: "Mila" }
let admin = { name: "Admin" }

function saySomething() {
    console.log( this.name )
}
// use the same function in two objects
user.f = saySomething
admin.f = saySomething

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)
admin['f']() // Admin (dot or square brackets access the method – doesn't matter)
// The rule is simple: if obj.f() is called, then this is obj during the call of f

// Arrow functions have no “this”
let person = {
    fname: "Carina",
    sayWhat() {
        let arrow = () => console.log(this.fname)
        arrow()
    }
}
person.sayWhat()

//========================Tasks==============================

// Task01
function makeUser() {
    return {
        name: "Carol",
        ref: this
    }
}
let user4 = makeUser()
console.log( user4.ref.name ) // No error but nothing gets printed

// Task02 Create a calculator
let calculator = {
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    },
    read() {
        //this.a = parseFloat(prompt('a?', 0)) 
        //this.b = +prompt('b?', 0) // Either parse or + in front to read as a number
    }
}
calculator.read()
console.log(calculator.sum())
console.log(calculator.mul());

// Task03 Chaining

let ladder = {
    step: 0,
    up() {
        this.step++
    },
    down() {
        this.step--
    },
    showStep() {
        console.log(this.step)
    }
}
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

// // make the calls chainable
// In order for this 2 to work, add a 'return this' for all methods
// ladder.up().up().down().showStep().down().showStep(); 

// ladder
//     .up()
//     .up()
//     .down()
//     .showStep()

// Examples of THIS keyword

function Person(n) {
    this.name = n 
    this.talk = function() {
        console.log(this); // just this returns the full object - this.name returns the name passed as the arg
    }
   
}
const me = new Person('Mila')
me.talk()
me.name

// Reminder 
function whatTime() {
    const now = new Date
    console.log(`${now.getHours()}:${now.getMinutes()}`)
}
setTimeout(whatTime, 1000)
const lista = [ 1, 2, 3, 4 ]
const elem = lista.map((item => `<li>${item}</li>`))
console.log(elem)

// This in object construction
function Persona(age) {
    this.age = age

}
const eu = new Persona('43')
const voce = new Persona('20')
console.log(eu.age)
console.log(voce.age)

function Human(name) {
    return {
        name, // This argument needs to be here in order to work
        getName() {
            return this.name
        }
    }
}
function sayThis() {
  console.log(this);
}
const boundFunc = sayThis.bind(/* arguments...*/);
const hum1 = new Human('Brittany')
console.log(hum1.name)

// const o = {
//   doSomethingLater() {
//     setTimeout(() => this.speakLeet(), 1000); // This is referencing to the speakLeet method and not window
//   },
//   speakLeet() {
//     console.log(`1337 15 4W350M3`);
//   },
// };
// o.speakLeet()
// let btn = document.querySelector('button')
// btn.addEventListener( 'click', function() {
//     console.log(this)
// })
function LeetSpeaker(elem) {
  return {
    listenClick() {
    //   const self = this;
      elem.addEventListener("click", function () {
        this.speakLeet();
      });
    },
    speakLeet() {
      console.log(`1337 15 4W350M3`);
    },
  };
}
let h = LeetSpeaker() 
// h.speakLeet();
h.listenClick
console.log(h)

let aniBtn = document.querySelector('button')
aniBtn.onclick = function() {
   this.style.backgroundColor = 'red' // Or I could: aniBtn.style.backgroundColor = 'red' ( works the same )
}


stripe.onclick = function () {
  let sec = new Date().getSeconds() % 10;
  // for instance, -3s here starts the animation from the 3rd second
  stripe.style.transitionDelay = "-" + sec + "s";
  stripe.classList.add("animate");
};

// Boat Animation:
boat.style.cursor = 'pointer'
 boat.onclick = function () {
   this.onclick = null; // only the first click should start the animation

   let times = 1;

   function go() {
     if (times % 2) {
       boat.classList.remove("back");
       boat.style.marginLeft = 100 * times + 200 + "px";
     } else {
       boat.classList.add("back");
       boat.style.marginLeft = 100 * times - 200 + "px";
     }
   }

   go();

   boat.addEventListener("transitionend", function () {
     times++;
     go();
   });
 };


 flyjet.onclick = function() {
    this.classList.add('growing')
 }

 function showCircle(cx, cy, radius) {
    let div = document.createElement('div')
    div.style.width = 0 
    div.style.height = 0
    div.style.left = cx + 'px'
    div.style.top = cy + 'px'
    div.className = 'circle'
    document.body.append(div)

    setTimeout(() => {
        div.style.width = radius * 2 + 'px'
        div.style.height = radius * 2 + 'px'
    }, 0)
 }