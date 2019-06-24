function convert (data) {
var hasil = []

for (var i = 0 ; i < data.length ; i++){
 hasil.push(data[i][0] = {id: data[i][0],
  firstName: data[i][1],
lastName: data[i][2],
email: data[i][3]})
}
return hasil
}

// TEST CASES
console.log(convert([
  [1, 'Dimitri', 'Wahyudiputra', 'dimitri@mail.com'],
  [2, 'Sergei', 'Dragunov', 'sergei@mail.com']
]));

/*
[ { id: 1,
    firstName: 'Dimitri',
    lastName: 'Wahyudiputra',
    email: 'dimitri@mail.com' },
  { id: 2,
    firstName: 'Sergei',
    lastName: 'Dragunov',
    email: 'sergei@mail.com' } ]
*/

console.log(convert([]));
// []