
var rightArrow = document.querySelector('.right');
var currentImage = document.querySelector('.current-image');
var leftArrow = document.querySelector('.left');
var dots = document.querySelector('.dots');
var picIndex = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var intID = setInterval(intSwitch, 3000);
var icon = document.querySelectorAll('.icon');

function moveRight(event) {
  clearInterval(intID);
  intID = setInterval(intSwitch, 3000);
  for (var i = 0; i < icon.length; i++) {
    if (icon[i].getAttribute('class') === 'fas fa-circle icon') {
      if (i === icon.length - 1) {
        icon[i].className = 'far fa-circle icon';
        icon[0].className = 'fas fa-circle icon';
        currentImage.setAttribute('src', picIndex[0]);
      } else {
        icon[i].className = 'far fa-circle icon';
        icon[i + 1].className = 'fas fa-circle icon';
        currentImage.setAttribute('src', picIndex[i + 1]);
        return;
      }
    }
  }
}

rightArrow.addEventListener('click', moveRight);

function moveLeft(event) {
  clearInterval(intID);
  intID = setInterval(intSwitch, 3000);
  for (var i = 4; i >= 0; i--) {
    if (icon[i].getAttribute('class') === 'fas fa-circle icon') {
      if (i === 0) {
        icon[i].className = 'far fa-circle icon';
        icon[4].className = 'fas fa-circle icon';
        currentImage.setAttribute('src', picIndex[4]);
      } else {
        icon[i].className = 'far fa-circle icon';
        icon[i - 1].className = 'fas fa-circle icon';
        currentImage.setAttribute('src', picIndex[i - 1]);
        return;
      }
    }
  }
}

leftArrow.addEventListener('click', moveLeft);

function dotSwitch(event) {
  clearInterval(intID);
  intID = setInterval(intSwitch, 3000);
  if (event.target.matches('.icon')) {
    for (var i = 0; i < icon.length; i++) {
      if (event.target === icon[i]) {
        icon[i].className = 'fas fa-circle icon';
        currentImage.setAttribute('src', picIndex[i]);
      } else {
        icon[i].className = 'far fa-circle icon';
      }
    }
  }
}

dots.addEventListener('click', dotSwitch);

function intSwitch() {
  for (var i = 0; i < icon.length; i++) {
    if (icon[i].getAttribute('class') === 'fas fa-circle icon') {
      if (i === icon.length - 1) {
        icon[i].className = 'far fa-circle icon';
        icon[0].className = 'fas fa-circle icon';
        currentImage.setAttribute('src', picIndex[0]);
      } else {
        icon[i].className = 'far fa-circle icon';
        icon[i + 1].className = 'fas fa-circle icon';
        currentImage.setAttribute('src', picIndex[i + 1]);
        return;
      }
    }
  }
}
