import { Clase1 } from "./clase1.js";

class Clase2 extends Clase1{
    constructor(){
        super()
        this.prop4 = 'Hola Mundo'
    }
    diProp2(){
        this.diProp()
        console.log(`La propiedad 4 es: ${this.prop4}`)
    }
}

export {Clase2}