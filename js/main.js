import * as func from './functions.js';

let cambio = func.cambioAuto();

document.addEventListener('keydown', (e) => {
  console.log(e.key);
  if (e.ctrlKey && e.key === 'F10') {
    func.cambiarP1();
    //elimino timeout para que no cambia despues de ctrl+f10
    if (cambio) {
      clearTimeout(cambio);
    }
  }
});

document.querySelector('#login input').addEventListener('blur', func.validarUser);
