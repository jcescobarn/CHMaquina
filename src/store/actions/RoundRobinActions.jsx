
export const ADD_PROCESS_TO_READY_QUEUE = 'ADD_PROCESS_TO_READY_QUEUE' 
export const ADD_PROCESS_TO_BLOQUED_QUEUE = 'ADD_PROCESS_TO_BLOQUED_QUEUE'
export const SET_ACTUAL_TIME = 'SET_ACTUAL_TIME'
export const SET_ARRIVE_TIME = 'SET_ARRIVE_TIME'
export const SET_ACTUAL_PROCESS = 'SET_ACTUAL_PROCESS'
export const TOGGLE_PAUSED = 'TOGGLE_PAUSED'
export const SET_VALIDATE_PROCESS_TIMER = 'SET_VALIDATE_PROCESS_TIMER'
export const SET_ADD_PROCESS_TIMER = 'SET_ADD_PROCESS_TIMER'
export const SET_PROCESS_BURST = 'SET_PROCESS_BURST'
export const SET_RUN_PROCESS = 'SET_RUN_PROCESS'
export const SET_ACTUAL_INDEX_PROCESS = 'SET_ACTUAL_INDEX_PROCESS'
//TODO need add modify bloqued field in process
//TODO need add modify end_time field in process

export function addProcessToReadyQueue(process) {  
        return { type: ADD_PROCESS_TO_READY_QUEUE, payload:{process} }
}

export function addProcessToBloquedQueue(Process) {
    return { type: ADD_PROCESS_TO_BLOQUED_QUEUE, payload:{Process}}
}

export function setActualTime(actual_time) {
    return { type: SET_ACTUAL_TIME, payload: {actual_time} }
}

export function setArriveTime(arrive_time) {
    return { type: SET_ARRIVE_TIME, payload: {arrive_time} }
}

export function setActualProcess(actual_process) {
    return {
        type: SET_ACTUAL_PROCESS, payload: {
                actual_process
        }
    }
}

export function togglePaused() {
    return { type: TOGGLE_PAUSED }
}

export function setValidateProcessTimer(validateProcesstimer) {
    return { type: SET_VALIDATE_PROCESS_TIMER, payload: { validateProcesstimer} }
}

export function setAddProcessTimer(addProcessTimer) {
    return {
        type: SET_ADD_PROCESS_TIMER, payload: {
                      addProcessTimer
        }
    }
}

export function setProcessBurst(process,new_burst) {
    return {
        type: SET_PROCESS_BURST, payload: {
                     process, new_burst
        }
    }
}

export function setRunProcess(process) {
    return {
        type: SET_RUN_PROCESS, payload: {
                     process
        }
    }
}

export function setActualIndexProcess(actualIndexProcess) {
    return {
        type: SET_ACTUAL_INDEX_PROCESS, payload: {
                    actualIndexProcess 
        }
    }
}
