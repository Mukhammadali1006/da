var name = prompt("Ism kiriting")
var currentYear = +prompt("Horirgi yilni kiriting")
var birthYear = +prompt("Tugilgan yilni kiriting")

console.log(name);
console.log(currentYear);
console.log(birthYear);


function calcYear() {
    var findAge = currentYear - birthYear
    
    console.log(name + ", " + "sizning yoshingiz " + findAge + "da" );
}

if (isNaN(name) && currentYear !== NaN || birthYear !== NaN ) {
    calcYear()
} else {
    console.error("Something went wrong!!!");
}