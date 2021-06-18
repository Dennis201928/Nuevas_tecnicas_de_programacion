//Asignacion
//=

// Comparacion

//==

//===
/*
console.log(2 == 2);
console.log(2 === '2');
console.log(2 == '2');


/


/ 

console.log(2 != 3);

/

/ 

<
>
<=
>=

*/

//Operadores de asignacion compuestos

/*
    += / x=x+y
    -= / x=x-7
    *=
    /=
    %=
    **=


var numero=3
numero-=2
console.log(numero)

   */

//Operadores aritmeticos
/*
+ suma
- resta
* multiplicacion
/ divicion
% modulo
** potencia
*/

//Desestructurar objetos
var persona = { nombre: "Dennis", 
    apellido: "Quiguire", 
    edad: 21, 
    viajes: { destino1: "Colombia", destino2: "Mexico" } };


var { nombre:nom, apellido, viajes: {destino1 } } = persona;

console.log(persona);
console.log(nom);
console.log(apellido);
console.log(destino);

//node 03_Operadores.js