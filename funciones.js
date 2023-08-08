/**
 * Tarea
 * Dos funciones tipo flecha
 * callback con un metodo
 */

/*punto 1*/
const crearArreglo = (frutas) =>{
    frutas.pop();
    return frutas;
} 

/*punto 2*/
const areaTriangulo = (n1,n2) => (n1*n2)/2;

/*callback*/
const callback= (dato1, dato2, calcular) =>{
    return calcular(dato1,dato2);
}

console.log(callback(2,5, areaTriangulo));

const callbackDos= (dato1, mostrar) =>{
    return mostrar(dato1);
}

console.log(callbackDos(['Banano', 'Piña', 'coco'], crearArreglo));