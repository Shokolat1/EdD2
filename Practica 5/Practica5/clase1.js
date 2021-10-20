class Clase1{
    constructor(){
        this.prop1 = 33
        this.prop2 = false
        this.prop3 = 'chocolate'
    }
    diProp(){
        console.log(`Tus propiedades de la clase 1 son:\n${this.prop1}, ${this.prop2}, ${this.prop3}`)
    }
}

export {Clase1}