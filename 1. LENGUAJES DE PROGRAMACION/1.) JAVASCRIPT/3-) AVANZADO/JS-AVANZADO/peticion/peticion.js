// puedes enviar solicitudes para recuperar datos de un servidor sin tener que recargar toda la página.
const req = new XMLHttpRequest();

req.open("GET", "https://jsonplaceholder.typicode.com/todos", true); // Recibe 2 argumento el metodo y la api
req.onreadystatechange = () => {
    if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
            const result = JSON.parse(req.response)
            console.log(result);
        } else {
            console.error('Hubo un problema con la solicitud')
        }
    } 
};

req.send();

/*
    PARTE 1 {
            el XMLHttpRequest no permite ejecutan de forma asyncrona el true despues de url lo que hace que 
            la solicitud sea asyncrono si pasa de true a false cambia a ejecucion sincrona

    }
    PARTE 2 {
        En la clase utilicé la propiedad de el objeto de petición que nos devuelve la instancia de 
        XMLHttpRequest llamado  onreadystatechange
        aunque en este caso funcione, os recomiendo reemplazarlo y empezar a utilizar 
        la propiedad onload
        de forma que quede req.onload = () => código a ejecutar cuando lleguen los datos
    }

*/
