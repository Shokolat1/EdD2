// VARIABLES ----------------------------------------------------------------------
// TABLA
let tablaDatos = document.querySelector('#tablaDatos')
let legendT = document.querySelector('.legendTable')
let legendB = document.querySelector('.legendBusqueda')
let legendD = document.querySelector('.legendDefault')

// BOTONES CABEZA
let btnNueva = document.querySelector('#btnNewPt')
let btnEdit = document.querySelector('#btnEditar')
let btnBusca = document.querySelector('#btnBuscar')
let btnBorra = document.querySelector('#btnBorrar')
let btnMuestra = document.querySelector('#btnMuestra')

// FORMULARIOS
let formAdd = document.querySelector('.nuevaParte')
let formEdit1 = document.querySelector('.editarPt1')
let formEdit2 = document.querySelector('.editarPt2')
let formBusca = document.querySelector('.buscarParte')
let formBorra = document.querySelector('.borrarParte')

// CAMPOS FORMULARIOS
    // Agregar
        let modeloA = document.querySelector('.modeloA')
        let parteA = document.querySelector('.parteA')
        let materialA = document.querySelector('.materialA')
        let colorA = document.querySelector('.colorA')
    // Editar
        let modeloE1 = document.querySelector('.modeloE1')
        let modeloE2 = document.querySelector('.modeloE2')
        let parteE = document.querySelector('.parteE')
        let materialE = document.querySelector('.materialE')
        let colorE = document.querySelector('.colorE')
    // Buscar
        let modeloBu = document.querySelector('.modeloBu')
    // Borrar
        let modeloBo = document.querySelector('.modeloBo')

// BOTONES SUBMIT FORMULARIOS
let btnFormAdd = document.querySelector('#btnFormAdd')
let btnFormEdit1 = document.querySelector('#btnFormEdit1')
let btnFormEdit2 = document.querySelector('#btnFormEdit2')
let btnFormBorra = document.querySelector('#btnFormEliminar')
let btnFormBusca = document.querySelector('#btnFormBuscar')

// FUNCIÓN PRINCIPAL ------------------------------------------------------------
function main(){
    a = []

    function mostrar(){
        legendT.style.display = 'none'
        legendB.style.display = 'none'
        legendD.style.display = 'block'
        
        tablaDatos.innerHTML = ``
        for (const [modelo, parte, material, color] of a){
            tablaDatos.innerHTML +=
                `<tr class="table-dark">
                    <td>${modelo}</td>
                    <td>${parte}</td>
                    <td>${material}</td>
                    <td>${color}</td>
                </tr>`
        }

        return console.log("Lista mostrada!")
    }

    function agregar(modelo, parte, material, color){
        let quitaDimension = a.flat(1)
        let busqueda = quitaDimension.indexOf(modelo)

        if (busqueda === -1) {
            legendT.style.display = 'none'
            legendB.style.display = 'none'
            legendD.style.display = 'none'
            b = Array.of(modelo, parte, material, color)
            a.push(b)
            return console.log("Elemento agregado!")
        } else {
            return alert('Error al agregar, modelo de pieza ya existente')
        }  
    }


    function buscar(modelo){
        let quitaDimension = a.flat(1)
        let busqueda = quitaDimension.indexOf(modelo)

        if (busqueda === -1) {
            alert('Error de búsqueda, modelo inexistente')
            return busqueda
        } else {
            legendT.style.display = 'block'
            legendB.style.display = 'none'
            legendD.style.display = 'none'
            tablaDatos.innerHTML =
                `<tr class="table-dark">
                    <td>${quitaDimension[busqueda]}</td>
                    <td>${quitaDimension[busqueda + 1]}</td>
                    <td>${quitaDimension[busqueda + 2]}</td>
                    <td>${quitaDimension[busqueda + 3]}</td>
                </tr>`
            console.log('Datos encontrados!')
            
            return busqueda
        }
    }

    function editar(modelo1, modelo2, parte, material, color){
        let quitaDimension = a.flat(1)
        let busqueda = quitaDimension.indexOf(modelo1)

        if (busqueda === -1) {
            return alert('Error al editar, modelo inexistente')
        } else {
            let i = busqueda/4
            a.splice(i, 1, [modelo2, parte, material, color])
            legendT.style.display = 'none'
            return console.log('Elemento editado exitosamente')
        }
    }

    function borrar(modelo){
        legendT.style.display = 'block'

        let quitaDimension = a.flat(1)
        let busqueda = quitaDimension.indexOf(modelo)

        if (busqueda === -1) {
            return alert('Error al borrar, modelo inexistente')
        } else {
            let i = busqueda/4
            a.splice(i, 1)
            return console.log('Pieza eliminada exitosamente!')
        }
    }

    
    return {mostrar, agregar, borrar, editar, buscar}
}

// CLOSURE ----------------------------------------------------------------------
let closure = main()

// MOSTRAR/OCULTAR FORMULARIOS --------------------------------------------------
btnNueva.addEventListener('click', () =>{
    formAdd.style.display = 'block'
    formEdit1.style.display = 'none'
    formEdit2.style.display = 'none'
    formBorra.style.display = 'none'
    formBusca.style.display = 'none'
})

btnEdit.addEventListener('click', () =>{
    formAdd.style.display = 'none'
    formEdit1.style.display = 'block'
    formEdit2.style.display = 'none'
    formBorra.style.display = 'none'
    formBusca.style.display = 'none'
})

btnBorra.addEventListener('click', () =>{
    formAdd.style.display = 'none'
    formEdit1.style.display = 'none'
    formEdit2.style.display = 'none'
    formBorra.style.display = 'block'
    formBusca.style.display = 'none'
})

btnBusca.addEventListener('click', () =>{
    formAdd.style.display = 'none'
    formEdit1.style.display = 'none'
    formEdit2.style.display = 'none'
    formBorra.style.display = 'none'
    formBusca.style.display = 'block'

    btnBusca.style.display = 'none'
    btnMuestra.style.display = 'inline-block'
})

btnMuestra.addEventListener('click', () =>{
    formAdd.style.display = 'none'
    formEdit1.style.display = 'none'
    formEdit2.style.display = 'none'
    formBorra.style.display = 'none'
    formBusca.style.display = 'none'

    btnBusca.style.display = 'inline-block'
    btnMuestra.style.display = 'none'

    closure.mostrar()
})

// ACCIONES DE FORMULARIOS ------------------------------------------------------
btnFormAdd.addEventListener('click', () =>{
    closure.agregar(modeloA.value, parteA.value, materialA.value, colorA.value)
    modeloA.value = ''
    parteA.value = ''
    materialA.value = ''
    colorA.value = ''

    formAdd.style.display = 'none'

    closure.mostrar()
})

btnFormEdit1.addEventListener('click', () =>{
    closure.buscar(modeloE1.value)

    if (closure.buscar(modeloE1.value) == -1) {
        formEdit2.style.display = 'none'
        
        btnBusca.style.display = 'inline-block'
        btnMuestra.style.display = 'none'
    } else {
        legendT.style.display = 'none'
        legendB.style.display = 'Block'
        legendD.style.display = 'none'
        formEdit2.style.display = 'block'
    }

    formEdit1.style.display = 'none'
})

btnFormEdit2.addEventListener('click', () =>{
    closure.editar(modeloE1.value, modeloE2.value, parteE.value, materialE.value, colorE.value)

    modeloE1.value = ''
    modeloE2.value = ''
    parteE.value = ''
    materialE.value = ''
    colorE.value = ''

    formEdit2.style.display = 'none'

    closure.mostrar()
})

btnFormBusca.addEventListener('click', () =>{
    closure.buscar(modeloBu.value)
    modeloBu.value = ''

})

btnFormBorra.addEventListener('click', () =>{
    closure.borrar(modeloBo.value)
    modeloBo.value = ''

    formBorra.style.display = 'none'

    closure.mostrar()
})

// MOSTRAR DATOS DE ARREGLO PRINCIPAL DESDE EL INICIO ---------------------------
closure.mostrar()