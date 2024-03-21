const usuariodiv = document.getElementById("usuario");

const usuarios = ["leo", "manu", "ximena"]


usuarios.map(element => {
    let p = document.createElement('p')
    p.innerText = element
    let fragmento = document.createDocumentFragment()
    fragmento.appendChild(p)
    usuariodiv.appendChild(fragmento)
})