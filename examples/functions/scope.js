// New Quokka file
//
var name = 'Phil';

function logName() {
  console.log(name);
}

logName();

function getName(name) {
  return name;
}

var myName = getName(name);
console.log(myName);

// --------------------------------------------------------

var color = 'red';

function logColor() {
  color = 'blue';
  console.log(`Color inside function: ${color}`);
}

console.log(`Color outside function: ${color}`);
logColor();
console.log(`Color outside function: ${color}`);

// --------------------------------------------------------

let number = 1;

function logNumber() {
  let number = 2;
  console.log(`Number inside function: ${number}`);
}

console.log(`Number outside function: ${number}`);
logNumber();
console.log(`Number outside function: ${number}`);
