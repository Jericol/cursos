

/*
    SELECTORES BASICO 
    
    
    $("#id")
    $(".clase")
    $("h2Etiqueta")
*/

/*
    SELECTORES COMPLEJOS "POR MEDIO DE ATRIBUTO EN UN INPUT EN TYPE"

    seleccionar un elemento typo de input number
    $("[type=number]")
    ahora podemos seleccionar los que sean distintos al type number
    $("[type!=number]")
*/

/*
    SELECTORES MULTIPLES "TENEMOS 6 <P></P>"

    Para seleccionar el primer parrafo 
    $("p:first")
    Para seleccionar el ultimo
    $("p:last")
    Para seleccionar los parrafos que son pares
    $("p:even")
    Para seleccionar los impares
    $("p:o")
*/

/*
    EVENTOS

    Evento click 
    elemento.click(() => {
        console.log("hiciste click")
    })

    Evento mouseover "cuando pasamos el mouse dentro del elemento "
    elemrnto.mouseover(() => {
        console.lo("mouse dentro de la etiqueta")
    })

    en los eventos se pasan metdos hide que desaparece - show que aparece el elemento
    fadeout que desvanece y el fadetoggle 
*/

const boton = $("#boton");
const parrafo = $("#parrafo")
const boton_close = $("#close")

boton.click(() => {
    parrafo.animate( {
        marginLetf: "8em",
        fontSize: "20px"
    },)
})

boton_close.click(() => {
    
})




