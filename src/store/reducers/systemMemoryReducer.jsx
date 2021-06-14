
const initialState = { // objeto de estado inicial
    system_state: 'Modo Kernel',
    memory: ['Acumulador', 'OS space', 'OS space', 'OS space', 'OS space', 'OS space'],
    memory_size: 100,
    OS_occupied_memory: 5,
    acumulador: 0,
    variables: [],
    labels: [],
    process_queue: [],
    current_process: '-',
    current_instruction: '-',
    memory_edit: true,
    print_monitor_area: [],
    print_printer_area: [],
}


const systemMemoryReducer = (state = initialState, action) => { // dentro de este reducer se definen las funciones que afectarán directamente al estado de la aplicación

    switch (action.type) {
        case 'SET_MEMORY_SIZE':
            console.log(state.memory_size)
            return Object.assign({}, state, {
                memory_size: action.payload
            })
        case 'SET_OS_OCCUPIED_MEMORY':
            return Object.assign({}, state, {
                OS_occupied_memory: action.payload
            })
        case 'ADD_INSTRUCTION':
            return Object.assign({}, state, {
                memory: [...state.memory, action.payload]
            })
        case 'ADD_OS_MEMORY_SPACE':
            let new_array = ['Acumulador', 'OS space']; // se define el array que contendrá la nueva posición en memoria
            for (let i = 1; i < state.memory.length; i++) { // se realiza un ciclo recorriendo el array para agregar el nuevo espacio de memoria para el sistema operativo
                new_array.push(state.memory[i]);
            }
            return Object.assign({}, state, {
                memory: new_array
            })
        case 'REMOVE_OS_MEMORY_SPACE':
            const removed_array = []
            for (let i = 0; i < state.memory.length; i++) {
                if (i !== 1) {
                    removed_array.push(state.memory[i])
                }
            }
            return Object.assign({}, state, {
                memory: removed_array
            })
        case 'REMOVE_INSTRUCTION':
            return Object.assign({}, state, {
                memory: state.memory.splice(action.payload, 1)
            })
        case 'ADD_VARIABLE':
            return Object.assign({}, state, {
                variables: [...state.variables, action.payload]
            })
        case 'REMOVE_VARIABLE':
            return Object.assign({}, state, {
                memory: state.variables.splice(action.payload, 1)
            })
        case 'SET_VARIABLE':
            let new_variables = []
            state.variables.map((variable) => {
                if (variable.name === action.payload.name) {
                    variable.value = action.payload.value
                    new_variables.push(variable)
                } else {
                    new_variables.push(variable)
                }
            })
            return Object.assign({}, state, {
                variables: new_variables
            })
        case 'TOGGLE_SYSTEM_STATE':
            if (state.system_state === 'Modo Kernel') {
                return Object.assign({}, state, {
                    system_state: 'Modo Usuario'
                })
            } else {
                return Object.assign({}, state, {
                    system_state: 'Modo Kernel'
                })
            }
        case 'ADD_LABEL':
            return Object.assign({}, state, {
                labels: [...state.labels, action.payload]
            })
        case 'REMOVE_LABEL':
            return Object.assign({}, state, {
                labels: state.labels.splice(action.payload, 1)
            })
        case 'ADD_PROCESS':
            return Object.assign({}, state, {
                process_queue: [...state.process_queue, action.payload]
            })
        case 'REMOVE_PROCESS':
            return Object.assign({}, state, {
                process_queue: state.process_queue.splice(action.payload, 1)
            })
        case 'TOOGLE_MEMORY_EDIT':
            return Object.assign({}, state, {
                memory_edit: (state.memory_edit) ? false : true
            })
        case 'SET_ACUMULADOR':
            return Object.assign({}, state, {
                acumulador: action.payload
            })
        case 'ADD_PRINTER_DATA':
            return Object.assign({}, state, {
                print_printer_area: [...state.print_printer_area, action.payload]
            })
        case 'ADD_MONITOR_DATA':
            return Object.assign({}, state, {
                print_monitor_area: [...state.print_monitor_area, action.payload]
            })
        case 'SET_POINTER':
            return Object.assign({}, state, {
                pointer: action.payload 
            })
        case 'SET_CURRENT_INSTRUCTION':
            return Object.assign({},state,{
                current_instruction: action.payload
            })
        default:
            return state
    }

}

export default systemMemoryReducer;