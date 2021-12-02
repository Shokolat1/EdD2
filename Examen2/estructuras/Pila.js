class Pila{
    constructor(){
        this.pila = []
    }

    Push(num){
        this.pila.push(num)
        console.log(`Nuevos elementos agregados: ${num}`)
    }
    
    Pop(){
        let x = this.pila[this.pila.length-1]
        this.pila.pop()
        console.log(`Se quitó el último número de la pila: ${x}`)
    }
    
    Peek(){
        if(this.pila.length==0){
            alert('No hay elementos en la pila');
        }else{
            alert(`El último elemento de la pila es ${this.pila[this.pila.length-1]}`)
        }
    }

    isEmpty(){
        if(this.pila.length == 0) return 'VACÍA'
        else return 'con elementos'
    }

    Print(){
        let show = ''
        for (let i = 0; i < this.pila.length; i++) {
            show += `<span class="badge rounded-pill bg-primary">${this.pila[i]}</span>`
        }
        return show
    }
}

export {Pila}