Una promesa es un objeto de javascript que representa la eventual completitud o falla de una operacion 
asincorona. Las promesas sosn usuadas para manejar operaciones asincronas de manera mas sencilla y evitar
el uso excesivo de callbacks anidados (callback hell)

( UNA PROMESA PUEDE ESTAR EN UNO DE ESTOD ESTADOS: )

1.) PENDING (pendiente): Estado inicial, la promesa aún no se ha completado ni se ha rechazado.
2.) FULFILLED (COMPLETADO): La operacion se ha completado correctamente. 
3.) REJECTED (RECHAZADA): La operacion fallo.

para crear una promesa puedes utilizar un constructor ~PROMISE~ y pasarle una funcion con dos 
parametros `RESOLVE REJECT` que te permiten completar o rechazar la promesa, respectivamente 

const miPromesa = new Promise((resolve, reject) => {
    // Simulando una operación asíncrona
    setTimeout(() => {
        const exito = true;
        if (exito) {
            resolve("¡Operación exitosa!"); // Se completa la promesa
        } else {
            reject("¡Operación fallida!"); // Se rechaza la promesa
        }
    }, 2000);
});

// Utilizando la promesa
miPromesa.then((mensaje) => {
    console.log(mensaje); // Se imprime "¡Operación exitosa!" si la promesa se completó
}).catch((error) => {
    console.error(error); // Se imprime "¡Operación fallida!" si la promesa fue rechazada
});

