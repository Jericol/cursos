// objetos literales 

const alumno = {
    nombre: "leonardo",
    apellido: "gomez",
    edad: 35,
    email: "leodev@gmail.com",
    pais: "colombia",
    // anidar mas valores
    padre: {
      nombre: "humberto",
      edad: 68
    },
}

console.log(alumno);

/* ASIGNACION: de atributos, 
   se se asigan nuevos atributos y crea un nuevo objeto con los resultados
   el objeto principal quede intacto
*/
//primera forma
alumno.genero = "Masculino"
// segunda forma
alumno["genero"] = "Masculino"
/*
  ASIGNACION: cambio de valor de un atributo ya declarado
*/
alumno["edad"] = 20; 
console.log(alumno)