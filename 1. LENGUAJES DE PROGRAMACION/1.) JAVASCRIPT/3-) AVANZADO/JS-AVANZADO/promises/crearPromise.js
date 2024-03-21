// crear nuestra propia promesa

/*
    1.). new Promise = es una funcion de promesa 
    2-). () = el primer parentesis es el constructor de la promesa
    3-). ((resolve, reject)) = dentro del constructor viene dos parametros 
    4-). se puede devolver then para el resolve y un catch para el error de
            del reject
    ESTA ES LA SINTAXSIS 
    const miFuncion = (text) => {
        return new Promise((resolve, reject) => {
        if (!text) {
            reject("Nesecito un parametro de texto")
        }
        resolve(text)
    });
};

miFuncion("texto")
    .then((text) => {
        console.log(text);
    })
    .catch((error) => {
        console.log(error);
    })

*/

const miFuncion = (text) => {
  return new Promise((resolve, reject) => {
    if (!text) {
      reject("Nesecito un parametro de texto");
    }
    resolve(text);
  });
};

miFuncion("texto")
  .then((text) => {
    console.log(text);
  })
  .catch((error) => {
    console.log(error);
  });
