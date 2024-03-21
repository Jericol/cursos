// peticion a la respuesta 
const respuesta = fetch("https://jsonplaceholder.typicode.com/todos")

// metodo de respuesta 
respuesta.then((res) => {
    const datos = res.json()
    datos.then((info) => {
        console.log(info);
    });
});
// metodo de error 
respuesta.catch(() => {
    console.log('error en la peticion');
});
// metodo 
respuesta.finally(() => {
    console.log("siempre me ejecuto haci falle la solicitud");
})