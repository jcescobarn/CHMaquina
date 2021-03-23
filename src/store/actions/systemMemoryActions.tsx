import '../../types'
import { systemMemoryAction } from '../../types'

export const SET_MEMORY_SIZE_ACTION = 'SET_MEMORY_SIZE' // se declara una variable con el nombre de la acción
export const SET_OS_OCCUPIED_MEMORY_ACTION = 'SET_OS_OCCUPIED_MEMORY'
export const ADD_INSTRUCTION = 'ADD_INSTRUCTION'
export const REMOVE_INSTRUCTION = 'REMOVE_INSTRUCTION'

export function setMemorysize(number: number): systemMemoryAction { // se declara una función que devuelve una accion sobre el estado de la aplicacion
    return { type: SET_MEMORY_SIZE_ACTION, payload: number }
}

export function setOSOcuppiedMemory(number: number): systemMemoryAction {
    return { type: SET_OS_OCCUPIED_MEMORY_ACTION, payload: number }
}

export function setAddInstruction(instruction: string): systemMemoryAction {
    return { type: ADD_INSTRUCTION, payload: instruction }
}

export function setRemoveInstruction(number: number): systemMemoryAction {
    return { type: REMOVE_INSTRUCTION, payload: number }
}