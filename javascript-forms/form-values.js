var cont = document.querySelector('#contact-form');

cont.addEventListener('submit', function (event) {
  event.preventDefault();
  var objj = {};
  objj.email = cont.elements.email.value;
  objj.name = cont.elements.name.value;
  objj.message = cont.elements.message.value;
  console.log('Object: ', objj);
  cont.reset();

});
