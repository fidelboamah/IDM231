var scores = [24, 32, 17];
var scoresArrayLength = scores.length;

for (var i = 0; i < scoresArrayLength; i++) {
  console.log('Score #' + i + ': ' + scores[i]);
}

i = 1;

while (i < 10) {
  console.log('i: ' + i);
  i++;
}

var cars = ['Ford', 'Chevy', 'Dodge'];
i = 0;

while (cars[i]) {
  // console.log(cars[i]);
  console.log('cars[' + i + ']: ' + cars[i]);
  i++;
}

console.log('All Loops Over!');