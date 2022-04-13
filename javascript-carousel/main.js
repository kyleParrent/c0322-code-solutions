
var rightArrow = document.querySelector('.right');
var currentImage = document.querySelector('.current-image');

function moveRight(event) {
  var iconON = document.querySelector('.icon-on');
  if (currentImage.getAttribute('src') === 'images/001.png') {
    currentImage.setAttribute('src', 'images/004.png');
    iconON.className = 'far fa-circle icon';
    iconON.nextSibling.className = 'fas fa-circle icon-on';
  } else if (currentImage.getAttribute('src') === 'images/004.png') {
    currentImage.setAttribute('src', 'images/007.png');
  } else if (currentImage.getAttribute('src') === 'images/007.png') {
    currentImage.setAttribute('src', 'images/025.png');
  } else if (currentImage.getAttribute('src') === 'images/025.png') {
    currentImage.setAttribute('src', 'images/039.png');
  } else if (currentImage.getAttribute('src') === 'images/039.png') {
    currentImage.setAttribute('src', 'images/001.png');
  }
}

rightArrow.addEventListener('click', moveRight);
