var i = 0;
var amountR = 0;
var phrase = 'grumpywizardsmaketoxicbrew';
var letterS = document.querySelectorAll('span');
var acc = document.querySelector('.ac');

function grade(event) {
  if (event.key === phrase[i]) {
    letterS[i].className = 'correct';
    i++;
    letterS[i].className = 'normal';
    amountR++;
    acc.textContent = 'Accuracy: ' + amountR + '/26';
  } else {
    letterS[i].className = 'wrong';
    amountR--;
    acc.textContent = 'Accuracy: ' + amountR + '/26';
  }
}

document.addEventListener('keydown', grade);
