class NodoS {
    constructor(dato, next = null){
        this.dato = dato;
        this.next = next;
    }
}

class ListaEnlazada{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //insertBefore  agrega un nodo al principio de la lista
    insertBefore(dato){
        this.head = new NodoS(dato, this.head);
        this.size++;
    }

    //insertAfter   agrega un nodo al final de la lista
    insertAfter(dato){
        let newNode = new NodoS(dato);
        
        if(! this.head){
            this.head = newNode;
        }
        else{
            let tail = this.head;
            while(tail.next !==null){
                tail = tail.next;
            }
            tail.next = newNode;
        }
        this.size++;
    }

    //insertAt      agrega un nodo en una posicion especifica
    insertAt(dato, index){
        if(index < 0 || index > this.size){
            return null;
        }

        const newNode = new NodoS(dato);
        let current = this.head;
        let previous;

        if(index == 0){
            this.insertBefore(dato)
        }else{
            for(let i=0; i<index; i++){
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        this.size++;
    }

    //removeFirst   remueve el primer nodo
    removeFirst(){
        if(this.size === 0){
            return null;
        }else if(this.size === 1){
            this.head = null
            this.size--;
        }else{
            this.head = this.head.next
            this.size--;
        }
    }

    //removeLast    remueve el ultimo nodo
    removeLast(){
        if(this.size === 0){
            return null;
        }else if(this.size === 1){
            this.head = null
            this.size--;
        }else{
            let current = this.head;
            let previous = null;
    
            for(let i = 1; i < this.size; i++){
                previous = current;
                current = current.next;
            }
    
            previous.next = null;
                
            this.size--;
            return previous.data;
        }
    }

    //removeData    remueve un node con el valor que le pasamos
    removeData(dato){
        let current = this.head;
        let previous = null;

        while(current != null){
            if(current.dato === dato){
                if(!previous){
                    this.head = current.next;
                }
                else{
                    previous.next= current.next;
                }
                this.size--;
                return current.dato;
            }
            previous = current;
            current = current.next;
        }
        return null;
    }

    //removeFrom    remueve un nodo de una posicion en especifica
    removeFrom(index){
        if(index < 0 || index > this.size){
            return null;
        }

        let current = this.head;
        let previous = null;

        if(index == 0){
            this.head = current.next
            current.next = null
        }else{
            for(let i=0; i<index; i++){
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
        return current.data;
    }

    //removeList    remueve toda la lista
    removeList(){
        this.head = null;
        this.size = 0
    }

    //isEmpty       retorna un true si la lista esta vacia y un flase si la lista no esta vacia
    isEmpty(){
        if(this.size === 0) return 'VACÍA'
        else return 'con elementos'
    }

    //print         muestra los nodos de la lista
    Print(){
        let current = this.head;
        let lista = ''
        while(current){
            lista += `<span class="badge rounded-pill bg-primary">${current.dato}</span>`
            current = current.next;
        }
        return lista
    }
}

export {ListaEnlazada}