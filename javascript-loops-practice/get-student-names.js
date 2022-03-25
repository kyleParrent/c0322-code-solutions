/* exported getStudentNames */

function getStudentNames(students) {
  var empty = [];
  for (var x in students) {
    empty.push(students[x].name);
  }
  return empty;
}
