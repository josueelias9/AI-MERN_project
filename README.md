
# __título 1__
## __título 2__ 
### ___título 3___
---
---
---
# __Proyecto: Object ecognition__
nombre del proyecto: Object recnition algorithm implemented in MERN stack.

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
- ubuntu
- nodejs v17.6.0
# __avance__
## __2022-03-03__
usamos el siguiente tutorial como para hacer nuestro proyecto
https://www.youtube.com/watch?v=7qyjYeF0074

o esta... andamos viendo
https://www.youtube.com/watch?v=BDfBbJWBRGs&list=PLdcAPGja1uw0LSn7kx-Plj76x8UZZLgz9&index=2

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
2. en ejemplo, copiamos todo el js y lo ponemos en el lugar donde estaba la funcion que eliminamos en el paso 1


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
