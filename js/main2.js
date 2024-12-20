import * as func from './functions.js';

const user = func.getCookie('usuarioActual');
console.log('usuario actual: ' + user);
const userCookie = func.getCookie(user);
console.log('usuario en la cookie: ' + userCookie);
console.log('usuario JSON: ');
console.log(JSON.parse(userCookie));
const objetoUser = JSON.parse(userCookie);
// const fechaFormat = objetoUser.fecha.split('T')[0].split('-').reverse().join('-');
// const horaFormat = objetoUser.fecha.split('T')[1].split('.')[0];
// console.log('hora: ' + objetoUser.fecha.split('T')[1].split('.')[0]);
// console.log('fecha formateada: ' + objetoUser.fecha.split('T')[0].split('').reverse().join(''));

document.querySelector('#saludo').textContent += ` ${user}`;
document.querySelector('#ultimaFecha').textContent = ` ${objetoUser.fecha}`;
document.querySelector('#ultimaHora').textContent = ` ${objetoUser.hora}`;

console.log(objetoUser.hora)
//actualizamos ultima entrada
objetoUser.fecha = new Date().toISOString().split('T')[0].split('-').reverse().join('-');
objetoUser.hora = new Date().toISOString().split('T')[1].split('.')[0];
console.log(objetoUser)
func.setCookie(user,JSON.stringify(objetoUser))

