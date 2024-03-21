// REDUNDANCIA


const usuario = {
    // atributos del objeto
    nombre: "leonardo",
    apellido: "gomez",
    edad: 35,
    email: "leodev@gmail.com",
    activo: true,
    // metodos del objeto "presentarse"
    presentarse() {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y tendo ${this.edad} años`)
    },
    
}


console.log(usuario)
// alumno.presentarse();
// alumno.whoIsYourFather();