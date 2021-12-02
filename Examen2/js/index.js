// VARIABLES DEL HTML --------------------------------------------------------------
    // Botones Cambio de Estructura
let bPila = document.querySelector('#bPila')
let bCola = document.querySelector('#bCola')
let bES = document.querySelector('#bES')
let bED = document.querySelector('#bED')
let bCS = document.querySelector('#bCS')
let bCD = document.querySelector('#bCD')
let bSize = document.querySelector('#bSize')
let bEmpty = document.querySelector('#bEmpty')

    // Divs externos de las extructuras
let divPila = document.querySelector('#divPila')
let divCola = document.querySelector('#divCola')
let divES = document.querySelector('#divEnSim')
let divED = document.querySelector('#divEnDob')
let divCS = document.querySelector('#divCirS')
let divCD = document.querySelector('#divCirD')

    // Formularios
        // Pila
            // Push
            let vPush = document.querySelector('#pilap')
            let bPush = document.querySelector('#botonPP')
            // Pop
            let bPop = document.querySelector('#Ppop')
            // Peek
            let bPeekPila = document.querySelector('#PPeek')

        // Cola
            // Enqueue
            let vEnqueue = document.querySelector('#Cenqueue')
            let bEnqueue = document.querySelector('#BCenqueue')
            // Dequeue
            let bDequeue = document.querySelector('#Cdequeue')
            // Peek
            let bPeekCola = document.querySelector('#Cpeek')

        // Enlazada Simple
            // insertFirst
            let vFirstES = document.querySelector('#FES')
            let inFirstES = document.querySelector('#IFES')
            let delFirstES = document.querySelector('#BFES')
            // insertLast
            let vLastES = document.querySelector('#vLES')
            let inLastES = document.querySelector('#ILES')
            let delLastES = document.querySelector('#BLES')
            // From o At
            let vAtES = document.querySelector('#AESV')
            let indexAtES = document.querySelector('#AESI')
            let bInsertAtES = document.querySelector('#IAES')
            let bRemFromAtES = document.querySelector('#BAES')
            // removedata
            let vRDataES = document.querySelector('#VRDES')
            let bRDataES = document.querySelector('#RDES')
            // removelist
            let bRListES = document.querySelector('#RLES')


        // Enlazada Doble
            // insertFirst
            let vFirstED = document.querySelector('#FED')
            let inFirstED = document.querySelector('#IFED')
            let delFirstED = document.querySelector('#BFED')
            // insertLast
            let vLastED = document.querySelector('#vLED')
            let inLastED = document.querySelector('#ILED')
            let delLastED = document.querySelector('#BLED')
            // At o From
            let vAtED = document.querySelector('#AEDV')
            let indexAtED = document.querySelector('#AEDI')
            let bInsertAtED = document.querySelector('#IAED')
            let bRemFromAtED = document.querySelector('#BAED')
            // removedata
            let vRDataED = document.querySelector('#VRDED')
            let bRDataED = document.querySelector('#RDED')
            // removeList
            let bRListED = document.querySelector('#RLED')
            // reversePrint
            let bRPrintED = document.querySelector('#RPED')

        // Circular Simple
            // insertFirst
            let vfirstCS = document.querySelector('#FCS')
            let infirstCS = document.querySelector('#IFCS')
            let delfirstCS = document.querySelector('#BFCS')
            // insertLast
            let vlastCS = document.querySelector('#LCS')
            let inlastCS = document.querySelector('#ILCS')
            let dellastCS = document.querySelector('#BLCS')
            // At o From
            let vAtCS = document.querySelector('#ACSV')
            let indexAtCS = document.querySelector('#ACSI')
            let bInsertAtCS = document.querySelector('#IACS')
            let bRemFromAtCS = document.querySelector('#BACS')
            // removedata
            let vRDataCS = document.querySelector('#VRDCS')
            let bRDataCS = document.querySelector('#RDCS')
            // removelist
            let bRListCS = document.querySelector('#RLCS')
            // getFirst
            let GFirstCS = document.querySelector('#GFCS')
            // getLast
            let GLastCS = document.querySelector('#GLCS')

        // Circular Doble
            // insertFirst
            let vFirstCD = document.querySelector('#FCD')
            let inFirstCD = document.querySelector('#IFCD')
            let delFirstCD = document.querySelector('#BFCD')
            // insertLast
            let vLastCD = document.querySelector('#vLCD')
            let inLastCD = document.querySelector('#ILCD')
            let delLastCD = document.querySelector('#BLCD')
            // At o Fromv
            let vAtCD = document.querySelector('#ACDV')
            let indexAtCD = document.querySelector('#ACDI')
            let bInsertAtCD = document.querySelector('#IACD')
            let bRemFromAtCD = document.querySelector('#BACD')
            // removedata
            let vRDataCD = document.querySelector('#VRDCD')
            let bRDataCD = document.querySelector('#RDCD')
            // removelist
            let bRListCD = document.querySelector('#RLCD')
            // reversePrint
            let bRPrintListCD = document.querySelector('#RPCD')

        // Divs que muestran pila, cola, listas
        let muestraPila = document.querySelector('.mPila')
        let muestraCola = document.querySelector('.mCola')
        let muestraEnSim = document.querySelector('.mEnSim')
        let muestraEnDob = document.querySelector('.mEnDob')
        let muestraCirSim = document.querySelector('.mCirSim')
        let muestraCirDob = document.querySelector('.mCirDob')


// IMPORTACIONES -----------------------------------------------------------------------
import {Cola} from '../estructuras/Cola.js'
import {Pila} from '../estructuras/Pila.js'
import {ListaEnlazada} from "../estructuras/EnlazadaSimple.js"
import {DoubleLinkedList} from "../estructuras/EnlazadaDoble.js"
import {ListaEC} from "../estructuras/CircularSimple.js"
import {ListaCDE} from '../estructuras/CircularDoble.js'

// INSTANCIAS --------------------------------------------------------------------------
const cola = new Cola()
const pila = new Pila()
const enlaSim = new ListaEnlazada()
const enlaDob = new DoubleLinkedList()
const cirS =  new ListaEC()
const cirDob = new ListaCDE()

// CAMBIOS DE ESTRUCTURAS (VISUAL) -----------------------------------------------------
bPila.addEventListener('click', () => {
    divPila.style.display = 'grid'
    divCola.style.display = 'none'
    divES.style.display = 'none'
    divED.style.display = 'none'
    divCS.style.display = 'none'
    divCD.style.display = 'none'
})

bCola.addEventListener('click', () => {
    divPila.style.display = 'none'
    divCola.style.display = 'grid'
    divES.style.display = 'none'
    divED.style.display = 'none'
    divCS.style.display = 'none'
    divCD.style.display = 'none'
})

bES.addEventListener('click', () => {
    divPila.style.display = 'none'
    divCola.style.display = 'none'
    divES.style.display = 'grid'
    divED.style.display = 'none'
    divCS.style.display = 'none'
    divCD.style.display = 'none'
})

bED.addEventListener('click', () => {
    divPila.style.display = 'none'
    divCola.style.display = 'none'
    divES.style.display = 'none'
    divED.style.display = 'grid'
    divCS.style.display = 'none'
    divCD.style.display = 'none'
})

bCS.addEventListener('click', () => {
    divPila.style.display = 'none'
    divCola.style.display = 'none'
    divES.style.display = 'none'
    divED.style.display = 'none'
    divCS.style.display = 'grid'
    divCD.style.display = 'none'
})

bCD.addEventListener('click', () => {
    divPila.style.display = 'none'
    divCola.style.display = 'none'
    divES.style.display = 'none'
    divED.style.display = 'none'
    divCS.style.display = 'none'
    divCD.style.display = 'grid'
})

bSize.addEventListener('click', () => {
    divPila.style.display = 'none'
    divCola.style.display = 'none'
    divES.style.display = 'none'
    divED.style.display = 'none'
    divCS.style.display = 'none'
    divCD.style.display = 'none'

    allSizes()
})

bEmpty.addEventListener('click', () => {
    divPila.style.display = 'none'
    divCola.style.display = 'none'
    divES.style.display = 'none'
    divED.style.display = 'none'
    divCS.style.display = 'none'
    divCD.style.display = 'none'

    areAllEmpty()
})

// FUNCIONES TODO: -------------------------------------------------------------------
    // Pila
        // Push
        bPush.addEventListener('click', ()=>{
            pila.Push(vPush.value)
            vPush.value = ''
            printAll()
        })
        // Pop
        bPop.addEventListener('click', ()=>{
            pila.Pop()
            printAll()
        })
        // Peek
        bPeekPila.addEventListener('click', () =>{
            pila.Peek()
        })

    // Cola
        // Enqueue
        bEnqueue.addEventListener('click', () =>{
            cola.Enqueue(vEnqueue.value)
            vEnqueue.value = ''
            printAll()
        })
        // Dequeue
        bDequeue.addEventListener('click', () =>{
            cola.Dequeue()
            printAll()
        })
        // Peek
        bPeekCola.addEventListener('click', () =>{
            cola.Peek()
        })

    // Enlazada Simple
        // insertBefore
        inFirstES.addEventListener('click', () => {
            enlaSim.insertBefore(vFirstES.value)
            vFirstES.value = ''
            printAll()
        })
        // insertAfter
        inLastES.addEventListener('click', () =>{
            enlaSim.insertAfter(vLastES.value)
            vLastES.value = ''
            printAll()
        })
        // insertAt
        bInsertAtES.addEventListener('click', () =>{
            enlaSim.insertAt(vAtES.value, indexAtES.value)
            vAtES.value = ''
            indexAtES.value = ''
            printAll()
        })   
        // removeFisrt
        delFirstES.addEventListener('click', () =>{
            enlaSim.removeFirst()
            printAll()
        })
        // removeLast
        delLastES.addEventListener('click', () =>{
            enlaSim.removeLast()
            printAll()
        })
        // removeData
        bRDataES.addEventListener('click', () =>{
            enlaSim.removeData(vRDataES.value)
            vRDataES.value = ''
            printAll()
        })
        // removeFrom
        bRemFromAtES.addEventListener('click', () =>{
            enlaSim.removeFrom(indexAtES.value)
            indexAtES.value = ''
            printAll()
        })
        // removeList
        bRListES.addEventListener('click', () =>{
            enlaSim.removeList()
            printAll()
        })

    // Enlazada Doble
        // insertFirst
        inFirstED.addEventListener('click', () => {
            enlaDob.insertFirst(vFirstED.value)
            vFirstED.value = ''
            console.log(enlaDob.size)
            printAll()
        })
        // insertLast
        inLastED.addEventListener('click', () => {
            enlaDob.insertLast(vLastED.value)
            vLastED.value = ''
            printAll()
        })
        // insertAt
        bInsertAtED.addEventListener('click', () =>{
            enlaDob.insertAt(vAtED.value, indexAtED.value)
            vAtED.value = ''
            indexAtED.value = ''
            printAll()
        })
        // removeFirst
        delFirstED.addEventListener('click', () => {
            enlaDob.removeFirst()
            printAll()
        })
        // removeLast
        delLastED.addEventListener('click', () => {
            enlaDob.removeLast()
            printAll()
        })
        // removeData
        bRDataED.addEventListener('click', () =>{
            enlaDob.removeData(vRDataED.value)
            vRDataED.value = ''
            printAll()
        })
        // removeFrom
        bRemFromAtED.addEventListener('click', () =>{
            enlaDob.removeFrom(indexAtED.value)
            indexAtED.value = ''
            printAll()
            console.log(enlaDob.size)
        })
        // removeList
        bRListED.addEventListener('click', () =>{
            enlaDob.removeList()
            printAll()
        })
        // reversePrint
        bRPrintED.addEventListener('click', ()=>{
            enlaDob.reversePrint()
        })

    // Circular Simple
        // insertFirst
        infirstCS.addEventListener('click', () =>{
            cirS.insertFirst(vfirstCS.value)
            vfirstCS.value = ''
            printAll()
        })
        // insertLast
        inlastCS.addEventListener('click', () =>{
            cirS.insertLast(vlastCS.value)
            vlastCS.value = ''
            printAll()
        })
        // insertAt
        bInsertAtCS.addEventListener('click', ()=> {
            cirS.insertAt(vAtCS.value, indexAtCS.value)
            vAtCS.value = ''
            indexAtCS.value = ''
            printAll()
        })
        // removeFirst
        delfirstCS.addEventListener('click', () =>{
            cirS.removeFirst(vfirstCS.value)
            vfirstCS.value = ''
            printAll()
        })
        // removeLast
        dellastCS.addEventListener('click', () =>{
            cirS.removeLast(vfirstCS.value)
            vfirstCS.value = ''
            printAll()
        })
        // removeData
        bRDataCS.addEventListener('click', () =>{
            cirs.removeData(vRDataCS.value)
            vRDataCS.value = ''
            printAll()
        })
        // removeFrom
        bRemFromAtCS.addEventListener('click', () =>{
            cirS.removeFrom(indexAtCS.value)
            indexAtCS.value = ''
            printAll()
        })
        // removeList
        bRListCS.addEventListener('click', () =>{
            cirS.removeList()
            printAll()
        })
        // getFirst
        GFirstCS.addEventListener('click', ()=>{
            cirS.getFirst()
        })
        // getLast
        GLastCS.addEventListener('click', ()=>{
            cirS.getLast()
        })

    // Circular Doble
        // insertFirst
        inFirstCD.addEventListener('click', () =>{
            cirDob.insertFirst(vFirstCD.value)
            vFirstCD.value = ''
            printAll()
        })
        // insertLast
        inLastCD.addEventListener('click', () =>{
            cirDob.insertLast(vLastCD.value)
            vLastCD.value = ''
            printAll()
        })
        // insertAt
        bInsertAtCD.addEventListener('click', () =>{
            cirDob.insertAt(vAtCD.value, indexAtCD.value)
            vAtCD.value = ''
            indexAtCD.value = ''
            printAll()
        })
        // removeFist
        delFirstCD.addEventListener('click', () =>{
            cirDob.removeLast(vFirstCD.value)
            vLastCD.value = ''
            printAll()
        })
        // removeLast
        delLastCD.addEventListener('click', () =>{
            cirDob.removeLast(vLastCD.value)
            vLastCD.value = ''
            printAll()
        })
        // removeData
        bRDataCD.addEventListener('click', () =>{
            cirDob.removeData(vRDataCD.value)
            vRDataCD.value = ''
            printAll()
        })
        // removeFrom
        bRemFromAtCD.addEventListener('click', () =>{
            cirDob.removeFrom(indexAtCD.value)
            indexAtCD.value = ''
            printAll()
        })
        // removeList
        bRListCD.addEventListener('click', () =>{
            cirDob.removeList()
            printAll()
        })
        // reversePrint
        bRPrintListCD.addEventListener('click', ()=>{
            cirDob.reversePrint()
        })

    // Generales
        // Print
        function printAll(){
            muestraPila.innerHTML = pila.Print()
            muestraCola.innerHTML = cola.Print()
            muestraEnSim.innerHTML = enlaSim.Print()
            muestraEnDob.innerHTML = enlaDob.Print()
            muestraCirSim.innerHTML = cirS.Print()
            muestraCirDob.innerHTML = cirDob.Print()
        }
        // getSize
        function allSizes(){
            alert(`La Pila tiene ${pila.pila.length} elementos\nLa Cola tiene ${cola.cola.length} elementos\nLa Lista Enlazada Simple tiene ${enlaSim.size} elementos\nLa Lista Doblemente Enlazada tiene ${enlaDob.size} elementos\nLa Lista Circular Simple tiene ${cirS.size} elementos\nLa Lista Circular Doble tiene ${cirDob.size} elementos`)
        }
        // isEmpty
        function areAllEmpty(){
            alert(`Status:\nPila --> ${pila.isEmpty()}\nCola --> ${cola.IsEmpty()}\nLista Enlazada Simple --> ${enlaSim.isEmpty()}\nLista Doblemente Enlazada --> ${enlaDob.isEmpty()}\nLista Circular Simple --> ${cirS.isEmpty()}\nLista Circular Doble --> ${cirDob.isEmpty()}`)
        }

// PRUEBAS --------------------------------------------------------------------------
// cola.Enqueue(1)
// cola.Dequeue()
// cola.Print()
// cola.Peek()
// cola.Size()

// pila.Push(1)
// pila.Push(3)
// pila.Pop()
// pila.Print()
// pila.Peek()
// pila.Size()
// pila.isEmpty()

// enlaSim.insertBefore(1)
// enlaSim.insertBefore(2)
// enlaSim.insertBefore(3)
// enlaSim.insertAt(4, 0)
// enlaSim.insertAfter(5)
// enlaSim.removeFirst()
// enlaSim.removeLast()
// enlaSim.removeFrom(0)
// enlaSim.removeList()
// enlaSim.print()
// enlaSim.isEmpty()
// enlaSim.getSize()

// enlaDob.insertFirst(44)
// enlaDob.insertFirst(5)
// enlaDob.insertLast(8)
// enlaDob.insertAt(93,0)
// enlaDob.removeFrom(2)
// enlaDob.reversePrint()
// enlaDob.print()
// enlaDob.getSize()

// cirS.insertLast(1)
// cirS.insertLast(2)
// cirS.insertLast(3)
// cirS.insertFirst(5)
// cirS.insertAt(2, 44)
// cirS.getSize()
// cirS.isEmpty()
// cirS.getFirst()
// cirS.removeList()
// cirS.print()
// cirS.getLast()

// cirDob.insertLast(4)
// cirDob.insertLast(5)
// cirDob.insertLast(6)
// cirDob.insertAt(1, 1)
// cirDob.removeData(5)
// cirDob.getSize()
// cirDob.isEmpty()
// cirDob.reversePrint()
// cirDob.print()