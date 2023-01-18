# Bienvenido a mi proyecto React

El siguiente proyecto se trata del desarrollo de un ecommerce solicitado por Coderhouse, durante la cursada de React Js.
En este caso, una tienda online destinada  a la comercialización de hierros.


# Inicio
Para dar de alta el mismo, es necesario iniciar react.

    npm start

## Librerias adicionales utilizadas

### Firebase
Se utiliza Firebase (firestore) como base de datos de nuestro proyecto, donde guardamos creamos las colecciones que contendran  los productos de nuestro catalogo de productos. Cada producto incluye el nombre, imagen y precio.
Para iniciar Firebase es necesarios:

    npm install firebase


### React Router
Para navegar en los diferentes componentes del ecommerce, utilizamos react router. Para su instalacion es necesario:

    npm install react-router-dom
De esta forma, cada componente que queremos vincular vamos a necesitar incluir la etiqueta **Link**, ademas de importar el proyecto con *import {BrowserRouter, Routes, Route}*.
