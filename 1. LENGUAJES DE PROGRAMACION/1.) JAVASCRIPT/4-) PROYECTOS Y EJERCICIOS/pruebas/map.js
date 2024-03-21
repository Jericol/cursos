

function myPromise(param) {
    return new Promise((resolve, reject) => {
      if (!param) {
        reject("pasa un parámetro");
      }
      resolve(param);
    });
  }
   
  async function mostrarResultado() {
    const resultado = await myPromise();
    console.log(resultado);
  }
   
  mostrarResultado();