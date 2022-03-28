var clicks = 0;
var hotB = document.querySelector('.hot-button');
var count = document.querySelector('.click-count');

function clicking(event) {
  clicks++;
}

hotB.addEventListener('click', clicking);

function text(event) {
  var newT = 'Clicks: ' + clicks;
  count.textContent = newT;
  if (clicks < 4) {
    hotB.className = 'hot-button cold';
  } else if (clicks < 7) {
    hotB.className = 'hot-button cool';
  } else if (clicks < 10) {
    hotB.className = 'hot-button tepid';
  } else if (clicks < 13) {
    hotB.className = 'hot-button warm';
  } else if (clicks < 16) {
    hotB.className = 'hot-button hot';
  } else if (clicks >= 16) {
    hotB.className = 'hot-button nuclear';
  }
}

hotB.addEventListener('click', text);
