# TP01 - Fundamentos de Node.js

## Descripción

Trabajo práctico individual sobre los fundamentos de Node.js. Incluye un programa que crea un archivo de texto con la ficha de un videojuego y otro que muestra el orden de ejecución del código sincrónico, `process.nextTick`, las promesas y `setTimeout`.

## Requisitos

- Node.js instalado (se recomienda una versión LTS).
- Terminal, PowerShell o Visual Studio Code.
- No se necesitan dependencias externas ni `npm install`.

## Archivos

- `index.js`: define una ficha de Minecraft, genera `videojuego.txt` y muestra el contenido en consola.
- `orden-event-loop.js`: ejemplifica el orden de ejecución de Node.js.
- `package.json`: incluye comandos para ejecutar los programas.
- `.gitignore`: excluye archivos locales y dependencias.

## Cómo ejecutar

Abrir la terminal en esta carpeta y ejecutar:

```bash
node index.js
```

Se crea el archivo `videojuego.txt` dentro del proyecto. También se puede usar:

```bash
npm start
```

Para observar el orden de ejecución:

```bash
node orden-event-loop.js
```

O bien:

```bash
npm run event-loop
```

### Resultado esperado del event loop

```text
1. Inicio del programa (sincrónico)
2. Fin del código sincrónico
3. process.nextTick
4. Promesa resuelta (microtarea)
5. Temporizador setTimeout (macrotarea)
```

## Cuatro preguntas de repaso

> **Importante:** estas cuatro preguntas son una propuesta de repaso. Antes de entregar, compararlas con las preguntas exactas de la consigna del docente, si son diferentes.

**1. ¿Qué es Node.js?**

Es un entorno de ejecución de JavaScript que permite correr programas fuera del navegador, por ejemplo, desde una terminal o en un servidor.

**2. ¿Para qué sirve el módulo `fs`?**

El módulo integrado `node:fs` permite trabajar con archivos y carpetas. En este TP se utiliza `writeFileSync` para crear un archivo de texto con una ficha de videojuego.

**3. ¿Qué diferencia existe entre código sincrónico y asincrónico?**

El código sincrónico se ejecuta en el orden en que aparece y puede bloquear la ejecución mientras realiza una tarea. El asincrónico permite programar operaciones cuyo resultado se procesa después, mediante callbacks, promesas u otros mecanismos.

**4. ¿Qué es el event loop y qué orden muestra este ejemplo?**

El event loop coordina la ejecución de tareas y callbacks en Node.js. En este ejemplo CommonJS primero aparecen los mensajes sincrónicos, luego `process.nextTick`, después la reacción de la promesa y finalmente el callback de `setTimeout`.

## Pruebas

Ejecutar ambos programas y comprobar que:

1. `node index.js` crea `videojuego.txt` con los datos esperados.
2. `node orden-event-loop.js` imprime los mensajes en el orden indicado.

## Entrega

Subir esta carpeta a un repositorio público de GitHub llamado `tp-01-fundamentos-node` y entregar su URL. No subir `node_modules` ni credenciales.
