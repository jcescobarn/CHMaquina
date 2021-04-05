
export const SET_MEMORY_SIZE_ACTION = 'SET_MEMORY_SIZE' // se declara una variable con el nombre de la acción
export const SET_OS_OCCUPIED_MEMORY_ACTION = 'SET_OS_OCCUPIED_MEMORY'
export const ADD_INSTRUCTION = 'ADD_INSTRUCTION'
export const REMOVE_INSTRUCTION = 'REMOVE_INSTRUCTION'
export const ADD_VARIABLE = 'ADD_VARIABLE'
export const REMOVE_VARIABLE = 'REMOVE_VARIABLE'
export const TOOGLE_SYSTEM_STATE = 'TOGGLE_SYSTEM_STATE'
export const ADD_LABEL = 'ADD_LABEL'
export const  REMOVE_LABEL = 'REMOVE_LABEL'
export const ADD_PROCESS = 'ADD_PROCESS'
export const REMOVE_PROCESS = 'REMOVE_PROCESS'


export function setMemorysize(number) { // se declara una función que devuelve una accion sobre el estado de la aplicacion
    return { type: SET_MEMORY_SIZE_ACTION, payload: number }
}

export function setOSOcuppiedMemory(number) {
    return { type: SET_OS_OCCUPIED_MEMORY_ACTION, payload: number }
}

export function setAddInstruction(instruction) {
    return { type: ADD_INSTRUCTION, payload: instruction }
}

export function setRemoveInstruction(number) {
    return { type: REMOVE_INSTRUCTION, payload: number }
}

export function addVariable(name, value, memoryPos) {
    return {
        type: ADD_VARIABLE, payload: {
            name,
            value,
            memoryPos
        }
    }
}

export function removeVariable(memoryPos) {
    return { type: REMOVE_VARIABLE, payload: memoryPos }
}

export function  toogleSystemState(){
    return {type: TOOGLE_SYSTEM_STATE}
}

export function addLabel(name, value, memoryPos){
return {
        type: ADD_LABEL, payload: {
            name,
            value,
            memoryPos
        }
    }
}

export function removeLabel(memoryPos){
    return {type:REMOVE_LABEL, payload:memoryPos}
}

export function addProcess(id,name){
    return {type: ADD_PROCESS, payload:{
        id,
        name
    }}
}

export function removeProcess(memoryPos){
    return {type:REMOVE_PROCESS, payload: memoryPos}
}