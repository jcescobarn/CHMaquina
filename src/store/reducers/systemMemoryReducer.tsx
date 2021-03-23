
import { systemMemoryAction, systemMemoryInitialState } from '../../types'


const initialState:systemMemoryInitialState = { // objeto de estado inicial
    system_state: 'Modo Kernel',
    memory: ['Acumulador'],
    memory_size: 100,
    OS_occupied_memory: 5,
    Acumulador: 0,
    variables: [],
    etiquetas: []
}

// ejemplo de un reducer 
const systemMemoryReducer = (state:systemMemoryInitialState = initialState, action: systemMemoryAction) => {
    
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
                memory: state.memory.splice(action.payload,1) 
            })

        default:
            return state
    }

}

export default systemMemoryReducer;