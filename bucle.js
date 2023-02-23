
var suma = 0;
// suma = suma +1;
// suma = suma +2;
// suma = suma +3;
// suma = suma +4;

// console.log(suma)

// El bucle for:

// El bucle for en JavaScript es una estructura de control que permite repetir un bloque de código varias veces. Se compone de tres partes:

// Inicialización de la variable de control
// Condición de continuación del bucle
// Actualización de la variable de control
// La sintaxis general del bucle for es la siguiente:

for (var i=0 ; i<5 ; i++) {
    // código a repetir
    suma = suma + i;
    console.log("Variable de interacion: ", i); 
}
console.log('Variable Suma: ', suma)

// La inicialización de la variable de control se realiza antes de que el bucle comience (var i=0 ;), generalmente se usa para establecer un valor inicial.

// La condición se evalúa al comienzo de cada iteración y determina si el bucle debe continuar o no ( i<5 ; ). Si la condición es verdadera, el código dentro del bucle se ejecutará; de lo contrario, el bucle se detendrá.

// La actualización de la variable de control se realiza al final de cada iteración del bucle ( i++ ), generalmente se usa para actualizar la variable de control.

// El bucle for es útil cuando se necesita iterar un número específico de veces, como para recorrer un array o una cadena de texto.



//Bucle While:

// Un bucle while en JavaScript es una estructura de control que permite ejecutar repetidamente un bloque de código mientras se cumpla una condición determinada.

//La sintaxis básica es la siguiente:

var suma1 = 0;

while (suma1 < 3) {
    // código a repetir
    suma1 = suma1 + 1;
    console.log(suma1)
}

// En cada iteración del bucle, se evalúa la condición. Si la condición se cumple (es decir, se evalúa como verdadera), el bloque de código dentro del bucle se ejecuta. Luego, se vuelve a evaluar la condición y, si sigue siendo verdadera, el bloque de código se vuelve a ejecutar. Este proceso se repite hasta que la condición ya no se cumple (es decir, se evalúa como falsa).

// Es importante tener en cuenta que, si la condición nunca deja de ser verdadera, el bucle continuará ejecutándose indefinidamente, lo que se conoce como un bucle infinito. Para evitar esto, se debe asegurar que la condición cambie en algún momento para que el bucle pueda terminar.

// En resumen, un bucle while es una herramienta muy útil para ejecutar repetidamente un bloque de código mientras se cumpla una condición específica, lo que permite automatizar tareas y simplificar el código.


//Diferencias:

// for es utilizado cuando se conoce de antemano la cantidad de veces que se debe ejecutar el bucle y se utiliza una variable de control que se actualiza en cada iteración.

// while es utilizado cuando no se conoce de antemano la cantidad de veces que se debe ejecutar el bucle y se ejecuta mientras se cumpla una condición.