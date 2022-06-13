function graduate(credential) {
  return function (fullname) {
    return fullname + ', ' + credential;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log('Med school grad: ', medicalSchool('Dan Abramov'));
console.log('Law school grad: ', lawSchool('Ryan Florence'));
