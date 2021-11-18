// PILA USANDO MÉTODOS DE ARREGLOS --------------------------------------
let pila = []

function Push(...nums){
    pila.push(...nums)
    console.log(`Nuevos elementos agregados: ${nums}`)
}

function Pop(){
    let x = pila[pila.length-1]
    pila.pop()
    console.log(`Se quitó el último número de la pila: ${x}`)
}

function Peek(){
    if(pila.length==0){
        console.log('No hay elementos en la pila');
    }else{
        console.log(`El último elemento de la pila es ${pila[pila.length-1]}`)
    }
}

function Size(){
    console.log(`La pila tiene ${pila.length} elementos`)
}

function Print(){
    console.log(`Esta es la pila actualmente: ${pila}`)
}

Peek()
Push(52, 31)
Pop()
Print()
Push(21, 54, 901)
Size()

// console.log(pila)