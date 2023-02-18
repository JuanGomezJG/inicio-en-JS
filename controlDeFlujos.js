//en este ejemplo vemos como funciona if, else if y else

function viajar (destino) {
    if (destino === "Brasil") {
    console.log("Gire A La Izquierda");
    } else if (destino === "Argentina"){
        console.log("Gire A La Derecha");
    } else {
        console.log('Nos Perdimos')
    }
}

viajar ('Brasil');

//este es otro ejemplo, la funcion "puedeManejar" tiene un tipo de dato de numero y otro string , dice que si es mayor o igual a 18 Anos puede Manejar (true), sino es mayor o igual a 18 entonces no puede Manejar y se le deniega el acceso.

function puedeManejar (edad) {
    if (edad >= 18) {
        console.log(true);
    } else {
        console.log ("No puedes manejar, Eres menor de 18");
    }
}

puedeManejar (16);
