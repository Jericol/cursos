const  MostraUsuarios = async () => {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos")
    const datos = await respuesta.json()
    console.log(datos);
}

const MostrarPorConsola = async () => {
    await MostraUsuarios()
    console.log("llegue");
}

MostrarPorConsola();