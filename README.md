
# __título 1__
## __título 2__ 
### ___título 3___
---
---
---
# __Proyecto: Object Recognition__
nombre del proyecto: Object recognition algorithm implemented in MERN stack.

| fecha de inicio | fecha fin  |
|---------------- | ---------- |
| 03-03-2022      | 01-10-2022 |

# __entregable__
- proyecto funcional
- documentacion

# __MERN?__
fuente: https://platzi.com/blog/que-es-mern-stack-javascript/?gclid=Cj0KCQiA64GRBhCZARIsAHOLriL2t4YYJe-wK8MmKF-h3gpY5HZRGTMulMgG9VV0YovOpWPoZHZP-OgaAnNeEALw_wcB&gclsrc=aw.ds

- mondoDB (base de datos)
- Express (backend)
- React (frontend)
- Node.js

# __entorno__
- Ubuntu 20.04.3 LTS 64 bits
- nodejs v17.6.0
# __avance__
## __2022-03-03__


### ___instalando react proyecto___ 
- ir a https://es.reactjs.org/
- ir a "Documentacion"
- "INSTALACION"
- "Crea una nueva aplicacion REACT"

### ___informacion variada___
- NPM y YARM son package managers https://dev.to/samithawijesekara/the-difference-between-npm-and-yarn-2j3p#:~:text=The%20main%20difference%20between%20NPM,perform%20a%20serial%20installation%20process.
- que es node.js: https://www.youtube.com/watch?v=xJzzu7MVZXw
- documentacion oficial de javascript https://developer.mozilla.org/es/
- el DOM es una interfaz que se usa para acceder y modificar el estilo, estructura y contenido de archivos HTML. https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction
- lista eventos onClick HTML
https://www.w3schools.com/tags/ref_eventattributes.asp
- se entendio sobre DOM. Avance importante.

### ___tutorial para que el ejemplo oficial funcione___

primero crear proyecto react con
```bash
npx create-react-app "nombre de carpeta que contendra el proyecto"
```

el ejemplo viene con tres codigos: JS, html y CSS:

CSS
1. el CSS del ejemplo lo agregamos en App.css o en index.css. No borramos nada

JS 
1. en App.js dentro de proyecto, eliminar la funcion App que esta dentro de App.js
2. en App.js dentro de proyecto, agregar lo siguiente en la cabecera:
```javascript
import React from 'react'
```
3. Del ejemplo, cambiamos el nombre "Game" por "App"
3. Del ejemplo, eliminamos lo siguiente:
```javascript
ReactDOM.render(<Game />, document.getElementById("root"));
```
2. Del ejemplo, copiamos todo el js y lo ponemos en el lugar donde estaba la funcion que eliminamos en el paso 1


HTML
1. En index.html, borrramos 
```html
<div id="root"></div>
```
2. Del ejemplo, copiamos todo el html del ejemplo y reemplazamos el siguiente codigo en el lugar del codigo que borramos en el paso 1

finalmente ejecutar 
```bash 
npm start
```
para levantar el servidor. Fin :D


### ___mas info___ 
veo que en el caso de los componentes, siempre estos llaman a la funcion render. Encontre esta info
> when context gets changed render gets called

aqui
https://stackoverflow.com/questions/50563434/when-does-the-render-method-in-react-get-called

otra cosa que aprendi es sobre las funciones flechas. muy buena explicacion en la guia oficial
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions

# __tutorial base (no oficial)__
Usamos el siguiente tutorial como para hacer nuestro proyecto
https://www.youtube.com/watch?v=7qyjYeF0074


## __estructura del proyecto__
Estructura de nuestro repositorio _proyecto_ (asumimos que este proyecto sera levantado en un repositorio propio)

```
|-- proyecto 
    |-- README.md
    |-- gitgnore
    |-- mernweb (creado con npx)
        |-- public
        |-- src
    |-- server (creado manualmente)
```
Estructura del repositorio _MERN-Website-master_ descargado
```
|-- Descargas
    |-- MERN-Website-master
        |-- Fine Art
            |-- src
            |-- server 
```
## __pasos__
### ___en carpeta Descargas___
1. descargar repositorio

https://github.com/Muhammad-Feroz/MERN-Website

2. descomprimir
### ___en carpeta proyecto___
Dentro de carpeta proyecto hacer lo siguiente:
```bash
npx create-react-app mernweb
```
### ___en carpeta Fine Art - client___
1. copiar carpetas _public_ y _src_ y reemplazar las que estan dentro de proyecto - mernweb.

2. ir _package.json_ y copiar las lineas donde dice _/* ESTO */_
```json
{
  "name": "mernweb",
  "version": "0.1.0",
  "private": true,
  "proxy" : "http://localhost:3001", /* ESTO */
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "bootstrap": "^5.1.3", /* ESTO */
    "font-awesome": "^4.7.0", /* ESTO */
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.0", /* ESTO */
    "react-scripts": "4.0.3",
    "web-vitals": "^1.1.2"
  },
```
3. pegar segun corresponda en el _package.json_ de proyecto - mernweb.
### ___en carpeta proyecto___
Crear carpeta para el server e iniciar _package.json_
```bash
mkdir server
cd server
npm init -y
```
### ___en carpeta Fine Art - server___
1. abir _package.json_ y copiar todas las dependencias. Pegarlas en las dependencias de proyecto - server. Tambien copiar _nodemon app.js_
```json

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev" : "nodemon app.js" /* ESTO */
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": { /* ESTO */
    "bcryptjs": "^2.4.3", /* ESTO */
    "cookie-parser": "^1.4.5", /* ESTO */
    "dotenv": "^10.0.0", /* ESTO */
    "express": "^4.17.1", /* ESTO */
    "jsonwebtoken": "^8.5.1", /* ESTO */
    "mongoose": "^6.0.12", /* ESTO */
    "nodemon": "^2.0.14" /* ESTO */
  } /* ESTO */
}
```

2. en Fine Art - server, copiar todos los archivos exepto _package.json_ y _package-lock.json_. Pegarlos en proyecto - server.
### ___en carpeta proyecto - server___
crear archivo config.env y poner lo siguiente:
```
PORT = 3001
DATABASE = mongodb+srv://User:CaXbZogKvsriloIC@cluster0.waw8k.mongodb.net/fineart?retryWrites=true&w=majority
```
tener en cuenta que:

```
mongodb+srv://User:_<password>@cluster0.waw8k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

<password> = CaXbZogKvsriloIC
myFirstDatabase = fineart
```
### ___en carpeta proyecto___
instalar dependencias para el cliente y servidor: 
```
cd (ruta al proyecto)/proyecto/mernweb
npm install
cd ..
cd server
npm install
```
finalemente, correr el cliente y el servidor en diferentes terminales:

ejecutando cliente
```bash
cd (ruta al proyecto)/proyecto/mernweb
npm start
```
ejecutando servidor
```bash
cd (ruta al proyecto)/proyecto/server
npm run dev
```
para ver que funciona, vaya _Atlas Mongodb_ e ingrese con la cuenta google.
