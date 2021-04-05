
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
    current_instruction: '-'
}

// ejemplo de un reducer 
const systemMemoryReducer = (state = initialState, action) => {

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
        case 'TOOGLE_SYSTEM_STATE':
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
        default:
            return state
    }

}

export default systemMemoryReducer;