var person = ['andrew', 25];

var personTwo = ['Jen', 29];

function hi(name, age) {
    return "Hi "+name +",you are "+age;
}

console.log(hi(...person));
console.log(hi(...personTwo));

var names = ['Miek', 'Ben'];
var final = ['Andrew',...names];

final.forEach(function (item) {
    console.log('Hi '+item)
});