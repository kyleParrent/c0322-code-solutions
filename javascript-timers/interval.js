var count = document.querySelector('.countdown-display');

function countFunction() {
  if (count.textContent === '4') {
    count.textContent = '3';
  } else if (count.textContent === '3') {
    count.textContent = '2';
  } else if (count.textContent === '2') {
    count.textContent = '1';
  } else if (count.textContent === '1') {
    count.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intID);
  }
}

var intID = setInterval(countFunction, 1000);
