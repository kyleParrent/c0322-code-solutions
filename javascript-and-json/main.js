var newArr = [{
  isbn: 194738664,
  title: 'The Magic Pants',
  author: 'Jack Yoodle'
}, {
  isbn: 900855537,
  title: 'The Happy Bird',
  author: 'Abby Young'
}, {
  isbn: 867775849,
  title: 'Half a Sandwich',
  author: 'Paul Staul'
}];

console.log('array of books: ', newArr);
console.log('type of book array: ', typeof newArr);

var jsonString = JSON.stringify(newArr);
console.log('JSON string: ', jsonString);
console.log('type of JSON string: ', typeof jsonString);

var newJson = '{ "id": 264598, "String name": "student"}';
console.log('new JSON string student: ', newJson);
console.log('type of new JSON string student: ', typeof newJson);

var studentObj = JSON.parse(newJson);
console.log('student object: ', studentObj);
console.log('type of student object: ', typeof studentObj);
