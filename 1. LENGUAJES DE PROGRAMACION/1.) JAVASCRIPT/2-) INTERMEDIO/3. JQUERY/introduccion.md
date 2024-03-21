INTRODUCCION JQUERY 

jQuery es un biblioteca de javascript que simplifica la manipulacion del DOM y el manejo de eventos en paginas web. Para comenzar a usar jQuery, primero necesitas incluir la biblioteca de tu pagina HTML. Puedes hacerlo descargando jQuery desde su sitio web oficial o urilizando un CDN (Content Delivery Network)

Una vez incluida la biblioteca, puedes empezar a utilizarla en tu codigo javascript. La forma mas comun de usar jQuery es seleccionar elementos del DOM y luego realizar acciones sobre ellos.

SELECCION DE ELEMENTOS

Para seleccionar elementos del DOM, utiliza el método '$()'
seguido de un selector CSS. Por ejemplo, para seleccionar todos los párrafos en la página, puedes hacerlo asi:

$("p")

MANIPULACIÓN DEL DOM 

Una vez que has seleccionado elementos, puedes manipular su contenido, estilo y atributos utilizando los métodos proporcionados por jQuery. Por ejemplo. para cambiar el texto de un párrafo:

$("p").text("Nuevo texto")

MANEJO DE EVENTOS 

jQuery simplifica el manejo de eventos en los elementos DOM 
Puedes usar métodos como 'click', 'hover()', 'keypress()',
entre otros. Por ejemplo, para mostrar un mensaje de alerta al hacer click en un boton: 

$("button").click(fuction() {
    alert("!hola!")
})

ANIMACIONES 

jQuery facilita la creacion de animaciones en elementos del DOM Puedes usar método como "fadeIn()", "fadeOut()", 
"slideUp()", "slideDown", entre otros. Por ejemplo, para hacer que un elemneto se desvanezca gradualmente:

$("div").fedeOut();

