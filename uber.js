const boton = document.querySelector('#company-button');
const compania = document.querySelector('.section-company');

boton.addEventListener('click', elementCompany);
// window.addEventListener('click', desactivandoEvento);

function elementCompany(){
  compania.classList.toggle('inactive');
};


