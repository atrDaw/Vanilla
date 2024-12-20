export function cambiarP1() {
  document.querySelector('#bienvenido').classList.toggle('oculto');
  document.querySelector('#login').classList.toggle('oculto');
}

export function cambioAuto() {
  return setTimeout(() => {
    cambiarP1();
  }, 5000);
}
