class Cola {
    constructor(){
        this.cola = []      
    }

    Enqueue(num){
        this.cola.push(num)
        console.log(`Elementos agregados: ${num}`)
    }
    
    Dequeue(){
        this.cola.shift()
        console.log(`Se quitó el primer elemento de la cola`)
    }
    
    Peek(){
        if(this.cola.length==0){
            alert('No hay elementos en la cola');
        }else{
            alert(`El primer elemento de la cola es ${this.cola[0]}`)
        }
    }

    Print(){
        let show = ''
        for (let i = 0; i < this.cola.length; i++) {
            show += `<span class="badge rounded-pill bg-primary">${this.cola[i]}</span>`
        }
        return show
    }
    
    IsEmpty(){
        if (this.cola.length == 0) return 'VACÍA'
        else return 'con elementos'
    }
}

export {Cola}