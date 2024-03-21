

class Usuario {
    constructor(nombre, apellido, correo, activo, cursosDictados, cursosTomados) {
      (this.nombre = nombre),
        (this.apellido = apellido),
        (this.correo = correo),
        (this.activo = activo);
        this.cursosDictados = cursosDictados,
        this.cursosTomados = cursosTomados
    }
    // pueden ir metodos "NOTA: En los metodos con buenas practicas nunca llevan console si no un return"
    presentarse() {
      return `Hola, mi nombre ${this.nombre} ${this.apellido}`;
    }
  
    /* 
      Métodos getters y los setters 
      GET -> Obtener
      SET -> Dar
    */
  
    getNombre() {
      return this.nombre
    }
  
     getApellidos() {
       return this.apellido
     }
  
     setNombre(nuevoNombre) {
        this.nombre = nuevoNombre
     }
  }
  
  const admin = new Usuario("leonardo", "gomez", "leodev@gamil.com", true, ["html", "css", "js"]);
  const alex = new Usuario("alexys", "lozada", "alexis@ed.team.com", true);
  // se le da el nuevo valor de set
  admin.setNombre("angie");
  
  console.log(`${admin.getNombre()} ${admin.getApellidos()}`)