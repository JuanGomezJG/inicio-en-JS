//Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
    // console.log(nombre);
    return nombre;
  }

function otraFuncion () {
    return ("El nombre retornador por la Fun 'cuidadoConElConsoleLog' es: " + cuidadoConElConsoleLog('Oni')
    );
}

//todo lo que se encuentra por debajo del return no se va a ejecutar en una funcion.
function cuidadoConElReturn(nombre){
  
  return nombre;
  console.log(nombre);
}