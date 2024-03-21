const mifuncion = (endpoint, texto) => {
    return new Promise((resolve, reject) => {
        const req = XMLHttpRequest();
        req.responseType = "json";
        req.open('GET', endpoint, true)
        req.onload = () => {
            resolve(req.response)
        };
        req.send()
    })
};

const mostraporconsola = async () => {
    const datos = await fetch("https://jsonplaceholder.typicode.com/todos")
    console.log(datos);
}

mostraporconsola();