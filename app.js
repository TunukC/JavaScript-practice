const name = "Ana lady";
let age = 30;
let boo = true;

const header = document.querySelector("#header");
const navLinks = document.querySelectorAll(".nav__link");
const testBtn = document.querySelector('#testBtn');

console.log(navLinks);

function sayHello() {
    let message = "Hello " + name;
    console.log(message);
}

sayHello();

function simpleMath(a, b) {
    let result = a + b;
    return result;
}

let sum = simpleMath(191, 228);

console.log(sum);


window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll);


function checkScroll() {
    let scrollPos = window.scrollY;

    if(scrollPos > 0) {
        header.classList.add('red');   
    } else {
        header.classList.remove('red');
    } 
}

testBtn.addEventListener("click", function() {
    console.log('clicked');
});


for(let navItem of navLinks) {
    navItem.addEventListener("click", function() {
        console.log(navItem.text);
    });

}

