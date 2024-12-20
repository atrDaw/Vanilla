export function cambiarP1() {
  document.querySelector('#bienvenido').classList.toggle('oculto');
  document.querySelector('#login').classList.toggle('oculto');
}

export function cambioAuto() {
  return setTimeout(() => {
    cambiarP1();
  }, 5000);
}

export function validarUser(e) {
  let regExpMail = /^.+@.+\..+$/;
  let error = document.querySelector('#errorMail');
  console.log('estoy validando esto');
  if (regExpMail.test(e.target.value)) {
    console.log('mail correcto');
    error.classList.add('oculto');
    if(!getCookie(e.target.value)){
      console.log("no existia")
      setCookie(e.target.value, crearUser(e.target.value));
    }
    setCookie('usuarioActual',e.target.value)
    console.log(new Date().toUTCString());
    console.log('cookie creada');
    e.target.value = '';
    window.location.href = './pantalla2.html';
  } else {
    console.log('mail incorrecto');
    error.classList.remove('oculto');
    e.target.select();
  }
}

export function setCookie(cname, cvalue, exdays=30) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
export function getCookie(cname) {
  var name = cname + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

export function deleteCookie(cname) {
  document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
}

export function crearUser(name) {
  //logica de formateo de fecha y hora
  const date=new Date();
  const fechaFormat=date.toISOString().split('T')[0].split('-').reverse().join('-');
  const horaFormat=date.toISOString().split('T')[1].split('.')[0];

  const user = {
    nombre: name,
    fecha: fechaFormat,
    hora: horaFormat
  };
  return JSON.stringify(user);
}