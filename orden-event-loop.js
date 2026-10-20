'use strict';

console.log('1. Inicio del programa (sincrónico)');

setTimeout(() => {
  console.log('5. Temporizador setTimeout (macrotarea)');
}, 0);

Promise.resolve().then(() => {
  console.log('4. Promesa resuelta (microtarea)');
});

process.nextTick(() => {
  console.log('3. process.nextTick');
});

console.log('2. Fin del código sincrónico');

// En CommonJS, Node.js ejecuta primero el código sincrónico,
// luego nextTick, después las microtareas de promesas y finalmente
// el temporizador. El tiempo 0 no implica ejecución inmediata.
