



const alumno = {
    // atributos del objeto
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
    // metodos del objeto "presentarse"
    presentarse() {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y tendo ${this.edad} años`)
    },
    // metodo del objeto "donde esta tu papa"
    whoIsYourFather() {
      console.log(`Hola, si papa se llama ${this.padre.nombre}`)
    }
}

alumno.presentarse();
alumno.whoIsYourFather();
// console.log(alumno);