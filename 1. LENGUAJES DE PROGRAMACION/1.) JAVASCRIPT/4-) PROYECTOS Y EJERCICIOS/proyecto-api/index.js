// "https://rickandmortyapi.com/api/character"
let page = 1;

const page_next = document.getElementById("page")

async function fetchData ()  {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    const data = response.json();
    return data
}

async function updateDom (page) {
    const result = await fetchData(page); // traemos la funcion del fetch
    const data = result.results; // aca traemos el resultado de la consulta
    console.log(data); 
    const list = document.getElementById("container"); // accedemos al id del contenedor para insertar elementos
    const template = document.createElement("template")
    data.forEach(element => { // en el innerhtml lo primero darle un signo + adicione la informacion
        template.innerHTML += ` 
            <div class="list-item">
                <img src="${element.image}" alt="">
                <div class="list-content">
                    <h2>${element.name}</h2>
                    <p>Origen: ${element.origin.name}</p>
                    <p>Especie: ${element.species}</p>
                    <p>Genero: ${element.gender}</p>
                    <p>Status: <span class="alive">${element.status}</span></p>
                </div>
            </div>`
    });
    list.innerHTML = template.innerHTML;
};

updateDom();

page_next.addEventListener('click', () => {
    page++
    updateDom(page)
    window.scroll(0, 0)
})