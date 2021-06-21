// node 07_arreglos.js

/*CONCAT*/

var numeros=[1,2,3,4,5]
var nuevonumero=numeros.concat([6,7,8,9,0])
//console.log(numeros)
//console.log(nuevonumero)

/*JOIN*/
var nombre=["D","e","n","n","i","s","e"]
//console.log(nombre.join(","));

/*
SLICE
*/
//las letra partir de esa letra
//console.log(nombre.slice(2));


/*
INDEX OF
*/
//la posicion de la letra
//console.log(nombre.indexOf("e"));

/*
LAST INDEX OF
*/
//console.log(nombre.lastIndexOf("e"));

/*
REVERSE
*/
//console.log(nombre.reverse());

/*
SORT
*/
//ordena lo numeros
var numerosdesordenados=[6,4,5,2,1,7,8,4,2,3,5,6]
//console.log(numerosdesordenados.sort())

/*
shift
*/
//
//console.log(numerosdesordenados.shift());

/*
POP
*/
//
//console.log(numerosdesordenados.pop());

/*
PUSH
*/
//
numerosdesordenados.push(1012);
//console.log(numerosdesordenados);

//consultar funciones de modificacions de arreglos

var pares=[2,4,6,8,10]
//console.log(pares.map((elemento)=>elemento+1));

/////////////////////////////////////////////////////////////////////
//consultar funciones de arreglos


/*
1-forEach()
ejecuta la función indicada una vez por cada elemento del array. Este método puede ayudarte a recorrer los elementos de un array.
*/
/*
const arr=[1,2,3,4,5,6];
arr.forEach(item=>{
console.log(item);
})
*/


/*
2-INCLUDES()
determina si un array incluye un determinado elemento, devuelve true o false según
corresponda. Utiliza el algoritmo sameValueZero para determinar
si se encuentra el elemento dado.
*/
/*
const pets=[`cat`,`dog`,`bat`];
console.log(pets.includes(`cat`));
console.log(pets.includes(`at`));
*/


/*
3-FILTER()
crea un nuevo array con todos los elementos que cumplan la condición 
implementada por la función dada.
*/
/*
const arr=[1,2,3,4,5,6];
const filtered=arr.filter(num=>num>3);
console.log(filtered);
*/


/*
4-reduce()
plica una función a un acumulador y a cada valor de un array (de izquierda a derecha) 
para reducirlo a un único valor.
*/
/*
const arr=[1,2,3,4,5,6];
const sum=arr.reduce((total,value)=>total+value,0);
console.log(sum);
*/


/*
5-some()
verifica si algún elemento de un array 
cumple con el test implementado por la función
brindada. Si se aprueba, devuelve “true” de lo contrario “false”.
*/
/*
const arr=[1,2,3,4,5,6];
const largeNum=arr.some(num=>num>4);
console.log(largeNum);
*/