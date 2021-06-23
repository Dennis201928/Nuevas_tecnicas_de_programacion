// node 10_Clases.js

//COMO SE HARIA ANTES
function Rectangulo(base,altura){
    this.base=base
    this.altura=altura
}

Rectangulo.prototype.calcularArea=function(){
    return this.base*this.altura
}
var rectangulo=new Rectangulo(6,3)
//console.log(rectangulo.calcularArea());
//console.log(rectangulo.base);

//DECLARACION DE CLASES

class Rectangulo2{
    constructor(base,altura){
        this.base=base
        this.altura=altura
    }
    calcularArea(){
        return this.base*this.altura
    }
}
var rectangulos2=new Rectangulo2(2,3)
//console.log(rectangulos2.calcularArea())



// Clase Persona
// implementar getters, setter y realizar una implementacion.
// implementar metodos estaticos - Clase Punto, Function distancia
// Construir clase Persona y estudiante, extender Estudiante con Persona>

/*

DEBER

*/
// Clase Persona
// implementar getters, setter y realizar una implementacion.
class Persona{
    constructor(nombre,apellido,genero){
    this._nombre=nombre;
    this._apellido=apellido;
    this._genero=genero;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }

    get apellido(){
        return this._apellido
    }
    set apellido(apellido){
        this._apellido=apellido
    }

    get edad(){
        return this._genero
    }
    set edad(genero){
        this._genero=this.genero
    }

}

let dennis = new Persona("Dennis","Quiguire","MASCULINO");
console.log(dennis);
//getter 
console.log(dennis.apellido);
//setter
dennis.apellido="Avila";
//getter
console.log(dennis.apellido);



// implementar metodos estaticos - Clase Punto, Function distancia
class punto{
    constructor ( x , y ){
        this.x = x;
        this.y = y;
    }
        static distancia ( a , b) {
        const dim1 = a.x - b.x;
        const dim2 = a.y - b.y;
        return Math.sqrt ( dim1 * dim1 + dim2 * dim2 );
        
    }
}
const res1 = new punto(5, 6);
const res2 = new punto(4, 5);
console.log (punto.distancia(res1, res2));


// Construir clase Persona y estudiante, extender Estudiante con Persona>

class estudiante extends Persona{
    getnombre(){
        console.log('Le gusta la materia de Matematicas a :'+this._nombre );
    }
}
var datos = new estudiante("Josue");
console.log(datos.getnombre());

