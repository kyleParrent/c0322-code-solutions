var tabContain = document.querySelector('.tab-container');
var tabs = document.querySelectorAll('.tab');
var views = document.querySelectorAll('.view');

tabContain.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabs.length; i++) {
      if (event.target === tabs[i]) {
        tabs[i].className = 'tab active';
      } else {
        tabs[i].className = 'tab';
      }
    }
    var targetDV = event.target.getAttribute('data-view');
    for (var ii = 0; ii < views.length; ii++) {
      if (views[ii].getAttribute('data-view') === targetDV) {
        views[ii].className = 'view';
      } else {
        views[ii].className = 'view hidden';
      }
    }
  }
});
