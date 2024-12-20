function cambiarP1() {
  document.querySelector('#bienvenido').classList.toggle('oculto');
  document.querySelector('#login').classList.toggle('oculto');
}

function cambioAuto() {
  return setTimeout(() => {
    cambiarP1();
  }, 5000);
}

document.addEventListener('keydown', (e) => {
  console.log(e.key);
  if (e.ctrlKey && e.key === 'F10') {
    cambiarP1();
    if (cambio) {
      clearTimeout(cambio);
    }
  }
});
let cambio = cambioAuto();
