var count = document.querySelector('.countdown-display');

function countDOWN() {
  if (count.textContent === '1') {
    count.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intID);
  } else {
    var countContent = count.textContent;
    var content = parseInt(countContent);
    var newContent = content - 1;
    count.textContent = newContent;
  }
}

var intID = setInterval(countDOWN, 1000);
