
var overL = document.querySelector('.overlay');
var pop = document.querySelector('.pop');
var openB = document.querySelector('.open-button');
var closeB = document.querySelector('.close-button');

function popClose(event) {
  overL.className = 'overlay';
  pop.className = 'pop';
  openB.className = 'open-button';
}

function popUp(event) {
  overL.className = 'overlay-on';
  pop.className = 'pop-on';
  openB.className = 'open-button-off';
}

closeB.addEventListener('click', popClose);
openB.addEventListener('click', popUp);
