var taskL = document.querySelector('.task-list');
taskL.addEventListener('click', function (e) {
  console.log('event target: ', e.target);
  console.log('event target name: ', e.target.tagName);
  if (e.target && e.target.tagName === 'BUTTON') {
    var close = e.target.closest('.task-list-item');
    console.log('item: ', close);
    close.remove();
  }
});
