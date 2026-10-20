'use strict';

const fs = require('node:fs');
const path = require('node:path');

const videojuego = {
  titulo: 'Minecraft',
  genero: 'Supervivencia y construcción',
  plataforma: 'PC',
  lanzamiento: 2011,
  desarrollador: 'Mojang Studios',
};

const contenido = [
  'FICHA DE VIDEOJUEGO',
  '------------------------------',
  `Título: ${videojuego.titulo}`,
  `Género: ${videojuego.genero}`,
  `Plataforma: ${videojuego.plataforma}`,
  `Año de lanzamiento: ${videojuego.lanzamiento}`,
  `Desarrollador: ${videojuego.desarrollador}`,
  '',
].join('\n');

const destino = path.join(__dirname, 'videojuego.txt');

try {
  fs.writeFileSync(destino, contenido, 'utf8');
  console.log('Ficha del videojuego creada correctamente.');
  console.log(`Archivo: ${destino}`);
  console.log(contenido);
} catch (error) {
  console.error('No se pudo crear la ficha:', error.message);
  process.exitCode = 1;
}
