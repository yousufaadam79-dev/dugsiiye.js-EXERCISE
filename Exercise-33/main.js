const status_one = document.querySelector('#status_one')

console.log( status_one);

const status_two = document.querySelector('#status_two')

console.log( status_two);

const status_three = document.querySelector('#status_three')

console.log( status_three);


const button = document.querySelectorAll('button')

console.log(button);


function change3() {
    status_one.textContent = "Haraa: $00 "
}


function change1() {
    status_two.textContent = "Haraa: $100 "
}


function change2() {
    status_three.textContent = "Haraa: $220 "
}