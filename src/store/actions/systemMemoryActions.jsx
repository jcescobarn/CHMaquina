
export const SET_MEMORY_SIZE_ACTION = 'SET_MEMORY_SIZE' // se declara una variable con el nombre de la acción
export const SET_OS_OCCUPIED_MEMORY_ACTION = 'SET_OS_OCCUPIED_MEMORY'
export const ADD_INSTRUCTION = 'ADD_INSTRUCTION'
export const REMOVE_INSTRUCTION = 'REMOVE_INSTRUCTION'
export const ADD_VARIABLE = 'ADD_VARIABLE'
export const REMOVE_VARIABLE = 'REMOVE_VARIABLE'
export const TOGGLE_SYSTEM_STATE = 'TOGGLE_SYSTEM_STATE'
export const ADD_LABEL = 'ADD_LABEL'
export const REMOVE_LABEL = 'REMOVE_LABEL'
export const ADD_PROCESS = 'ADD_PROCESS'
export const REMOVE_PROCESS = 'REMOVE_PROCESS'
export const ADD_OS_MEMORY_SPACE = 'ADD_OS_MEMORY_SPACE'
export const REMOVE_OS_MEMORY_SPACE = 'REMOVE_OS_MEMORY_SPACE'
export const TOOGLE_MEMORY_EDIT = 'TOOGLE_MEMORY_EDIT'
export const SET_ACUMULADOR = 'SET_ACUMULADOR'
export const SET_VARIABLE = 'SET_VARIABLE'
export const ADD_PRINTER_DATA = 'ADD_PRINTER_DATA'
export const ADD_MONITOR_DATA = 'ADD_MONITOR_DATA'
export const SET_CURRENT_INSTRUCTION = 'SET_CURRENT_INSTRUCTION'


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

export function addVariable(name, value, memoryPos, type,file) {
    return {
        type: ADD_VARIABLE, payload: {
            name,
            value,
            memoryPos,
            type,
            file
        }
    }
}

export function removeVariable(memoryPos) {
    return { type: REMOVE_VARIABLE, payload: memoryPos }
}

export function toggleSystemState() {
    return { type: TOGGLE_SYSTEM_STATE }
}

export function addLabel(name, line, memoryPos,file) {
    return {
        type: ADD_LABEL, payload: {
            name,
            line,
            memoryPos,
            file
        }
    }
}

export function removeLabel(memoryPos) {
    return { type: REMOVE_LABEL, payload: memoryPos }
}

export function addProcess(id, name) {
    return {
        type: ADD_PROCESS, payload: {
            id,
            name
        }
    }
}

export function removeProcess(memoryPos) {
    return { type: REMOVE_PROCESS, payload: memoryPos }
}

export function addOSMemorySpace() {
    return { type: ADD_OS_MEMORY_SPACE }
}

export function removeOSMemorySpace() {
    return { type: REMOVE_OS_MEMORY_SPACE }
}

export function toogleMemoryEdit() {
    return { type: TOOGLE_MEMORY_EDIT }
}

export function setAcumulador(value) {
    return { type: SET_ACUMULADOR, payload: value }
}

export function setVariable(variable, value){
    return {type:SET_VARIABLE, payload:{
        name: variable,
        value
    } }
}

export function addPrinterData(data){
    return {type: ADD_PRINTER_DATA, payload: data}
}

export function addMonitorData(data){
    return {type: ADD_MONITOR_DATA, payload:data}
}

export function setCurrentInstruction(data){
    return {type: SET_CURRENT_INSTRUCTION, payload:data}
}