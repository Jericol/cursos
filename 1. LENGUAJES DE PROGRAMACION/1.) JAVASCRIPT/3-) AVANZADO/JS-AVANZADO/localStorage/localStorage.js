let nombre = 'leonardo';
let edad = 30;

localStorage.setItem('minombre', nombre)
localStorage.setItem('edad', edad)


const edadcheck = localStorage.getItem('edad')
const nameCheck = localStorage.getItem('minombre')

console.log(edadcheck);
console.log(nameCheck);

localStorage.clear('edad')

console.log(edadcheck);
console.log(nameCheck);






