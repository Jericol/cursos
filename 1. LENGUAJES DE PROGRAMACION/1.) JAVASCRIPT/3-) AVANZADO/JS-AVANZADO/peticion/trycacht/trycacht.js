const obtenerUsuarios = async () => {
    const datos = await fetch("https://jsonplaceholder.typicode.com/todos")
    const result = await datos.json()
    return result
}


const MostraUsuarios = async () => {
    try {
       const datos = await obtenerUsuarios()
       console.log(datos); 
    } catch (error) {
        console.log(`Error en la solicitud ${error}`);
    }
}

MostraUsuarios();