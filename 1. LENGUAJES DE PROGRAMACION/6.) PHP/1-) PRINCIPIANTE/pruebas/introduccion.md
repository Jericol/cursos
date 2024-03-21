INTRODUCCION A PHP "es un lenguaje de programacion de codigo abierto

1) QUE ES PHP 
  RES: PHP (acronimo recursivode php: Hypertext Preprocessor) es un lenguaje de codigo abierto muy popular especialmente adecuado
  para desarrollo web y que puede ser incrustado en HTML en este ejemplo lo vamos a saber mas 

<!DOCTYPE html>
<html>
    <head>
        <title>Ejemplo</title>
    </head>
    <body>

        <?php
            echo "¡Hola, soy un script de PHP!";
        ?>

    </body>
</html>

en lugar de usar muchos comandos para mostrar HTML (como en C o en Perl) las paginas de PHP contienen HTML con codigo incrustado que hace "algo" (en este caso, mostrar "!Hola soy un script de PHP!) el codigo de PHP esta encerrado entre las ETIQUETAS ESPECIALES DE COMIENZO Y FINAL <?php y ?> que permite entrar y salir del "modo PHP"

Lo que distingue PHP de algo del lado del cliente como javascript es que el codigo es ejecutado en el servidor, generando HTML y enviandolo al clinet. El cliente recibira el resultado de ejecutar el script , aunque no se sabra el codigo subyacente que erA, el servidor web puede ser configurado incluso para que procese todos los ficheros HTML con PHP, por lo que no hay manera de que los usuarios puedan saber que se tine debajo de la manga.

Lo mejor de utilizar PHP es su extrema simplicidad para el principiante, pero a su vez ofrece muchas caracteristicas avanzadas para los programadores prfesionales. No sienta miedo de leer la larga lista de caracteristicas de PHP, en unas pocas horas podra empezar a escribir sus primeros scripts.

Aunque el desarrollo de PHP esta centrado en la programacion de scripts del lado del servidor, se puede utilizar para mucgas otra cosas. SIga leyendo y descubra mas en la seccion 


2) ¿QUE PUEDE HACER PHP?

Cualquier cosa. PHP esta enfocado principalmente a la programacion de scripts del lado del servidor, por lo que se puede hacer cualquier cosa que pueda hacer otro programa CGI, como recopilar datos de formularios, general paginas con contenidos dinamicos, o enviar y recibir cookies. Aunque PHP puede hacer mucho mas,

Existen principalmente tres campos principales donde se usan scripts de PHP.

* Scripts del lado del servidor. Este es el campo mas tradicional y el foco principal. Son necesarias tres cosas para que esto funcione: el analizador de PHP (modulo CGI o servidor), un servidor web y un navegador web, es necesario ejecutar el servidor con una instalacion de PHP conectada. Se puede acceder al resultado del programa de PHP con un navegador, Viendo la pagina de PHP a traves del servidor, todo esto se puede ejecutar en su maquina si esta experimientando con la programacion de PHP. Vease la seccion sobre las instrucciones de instalacion para mas informaacion.
* Scripts desde la linea de comandos. se puede crear un script de PHP y ejecutarlo sin necesidad de un servidor o navegador. solamente es necesario el analizador de PHP npara utilizarlo de esta manera. Este tipo de uso es ideal para scripts que se ejecutan con regularidad empleando cron (en *nix o linux) o el planificador de tareas (en windows). Estos scripts tambien pueden usarse para tareas simples de procesamiento de texto vease la seccion uso de php en la linea de comandos para mas informacion



















