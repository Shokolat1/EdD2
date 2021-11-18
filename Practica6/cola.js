let cola = []

function Enqueue(...num){
    cola.push(...num)
    console.log(`Elementos agregados: ${num}`)
}

function Dequeue(){
    cola.shift()
    console.log(`Se quitó el primer elemento de la cola`)
    Print()
}

function Peek(){
    if(cola.length==0){
        console.log('No hay elementos en la pila');
    }else{
        console.log(`El primer elemento de la cola es ${cola[0]}`)
    }
}

function Size(){
    console.log(`La cola tiene ${cola.length} elementos`)
}

function Print(){
    console.log(`Esta es la cola actualmente: ${cola}`)
}

function IsEmpty(){
    if (cola.length == 0) {
        console.log('La cola está vacía')
    } else {
        console.log('La cola NO está vacía')
    }
}

IsEmpty()
Enqueue(45, 42, 64)
Size()
Dequeue()
Peek()