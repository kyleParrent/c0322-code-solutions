/* exported todos */

var todos = [];
var previousTodosJSON = localStorage.getItem('javascipt-local-storage');
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}

function berforeCallBack(event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascipt-local-storage', todosJSON);
}

window.addEventListener('beforeunload', berforeCallBack);
