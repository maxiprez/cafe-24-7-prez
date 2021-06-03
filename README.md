# Proyecto Final React JS Café 24/7

  

El proyecto surgió de la idea que en Argentina hay poca variedad de Cafés de direfentes étnias, actualmente es un proyecto NO real con fines académicos, pero este e-commerce se podrá adaptar fácilmente a cualquier otro tipo de producto debido a que sus componentes son 100% re-utilizables.

  

## Usabilidad
  
El proyecto al día de la fecha está compuesto por 4 enlaces funcionales, el primer enlace es el logo que corresponde a la página de inicio (home), el segundo enlace corresponde a la totalidad de los productos (9 productos en total). Dentro del enlace de "tienda" hay un menú desplegable  para filtrar por tipo de café (suave, medio, intenso) a través de &#34;/products/:categoryId&#34; se accede puntualmente a las categorías anteriormente mencionadas.

Por otro lado, si deseamos acceder al detalle de cada producto en particular, podremos hacer click en el botón de "detalles", eso nos lleva a la siguiente ruta: "/item/:itemId". Todo está ruteado a los id's de Firebase asi mismo las imágenes y los id's de categorías. Además, la ruta /company se detalla brevemente la historia de la empresa y el último link de "contacto" ruteado en "/contact" posee un formulario de contacto que está vinculado al Firebase generando una nueva colección al enviar los datos.

  

## Instalación del proyecto

  

```sh

npx create-react-app my-app

```

  

## Inicio

  

```sh

npm run start

```
### Frameworks externos a React utilizados en el proyecto
* [React router](https://reactrouter.com/web/guides/quick-start): Usado a lo largo de todo el sitio web para poder navegar entre sus enlaces internos.
 ```sh

npm install react-router-dom

```
* [Bootstrap 4.6](https://getbootstrap.com/docs/4.0/getting-started/introduction/): Se utilizó este framework para darle estilos al e-commerce de forma más dinámica.
```sh

npm install bootstrap

```
* [React-icons](https://react-icons.github.io/react-icons/): Se usó para añadir iconos a la web y mejorar la experiencia del usuario.
```sh

npm install react-icons --save

```
  * [React-scroll](https://www.npmjs.com/package/react-scroll): Se instaló con el fin de mejorar la experiencia de usuario, ya que cuando se navega de un link hacia otro no se recarga la página y esto hace que el scroll quede a la mitad de la página y no arriba de todo.
```sh

npm i -S react-scroll

```
* [React elastic carousel](https://www.npmjs.com/package/react-elastic-carousel): Se instaló para agregar un la home ('/') un carrousel mostrando los productos destacados.
 ```sh

npm  install react-elastic-carousel

```

## Autor

  

👤 **Maximiliano Prez**

  

* Website: https://github.com/maxiprez/

* Github: [@maxiprez](https://github.com/maxiprez)

* LinkedIn: [@https:\/\/www.linkedin.com\/in\/maximiliano-prez\/](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/maximiliano-prez\/)

  

![Alt Text](https://media.giphy.com/media/9qIXrdgbkyBs6nUBHo/giphy.gif)
