
function ExampleConstructor() {
}

console.log('value of func proto:', ExampleConstructor.prototype);
console.log('value of typeof func proto:', typeof ExampleConstructor.prototype);

var newFunc = new ExampleConstructor();

var insta = newFunc instanceof ExampleConstructor;

console.log('value of newfunc insta:', insta);
