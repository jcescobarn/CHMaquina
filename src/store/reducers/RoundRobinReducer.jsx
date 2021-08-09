
const initialState = { // objeto de estado inicial
        ReadyQueue: [ {
                process: 'Proceso 1',
                arrive_time: 2,
                burst_time: 2,
                start_time: 2,
                end_time: 2,
                return_time: 2,
                wait_time: 2,
                status: 'paused'
                    },{
                process: 'Proceso 2',
                arrive_time: 1,
                burst_time: 1,
                start_time: 1,
                end_time: 1,
                return_time: 1,
                wait_time: 1,
                status: 'run'
                    }],
        BloquedQueue: [{
                        process: 0,
                        bloking: 0,
                        brust: 0
                      }],
        ProcessQuantity: 0,
        ActualTime: 0,
        ArriveTime: 0,
        ActualProcess: 'Proceso 1',
        ActualIndexProcess: 0,
        Paused: false,
        ValidateProcesstimer: 0,
        AddProcesstimer: 0,
        consts: {
                TIEMPOESPERA: 5001,
                PROCESOSINICIALES: 5,
                TIEMPOQUANTUM: 5,
                RAFAGARANDOM: 10
        }

}


const RoundRobinReducer = (state = initialState, action) => { // dentro de este reducer se definen las funciones que afectarán directamente al estado de la aplicación
    let new_array = []
    switch (action.type) {
        case 'ADD_PROCESS_TO_READY_QUEUE':
            return Object.assign({}, state, {
                ReadyQueue:[...state.ReadyQueue, action.payload] 
            })
        case 'ADD_PROCESS_TO_BLOQUED_QUEUE':
            return Object.assign({}, state, {
                BloquedQueue: [...state.BloquedQueue, action.payload] 
            })
        case 'SET_ACTUAL_TIME':
            return Object.assign({}, state, {
                ActualTime: action.payload.acualt_time 
            })
        case 'SET_ARRIVE_TIME':
            return Object.assign({}, state, {
                ArriveTime: action.payload.arrive_time 
            })
        case 'SET_ACTUAL_PROCESS':
            return Object.assign({}, state, {
                ActualProcess: action.payload.actual_process 
            })
        case 'TOGGLE_PAUSED':
            return Object.assign({}, state, {
                Paused: !state.Paused 
            })
        case 'SET_VALIDATE_PROCESS_TIMER':
            return Object.assign({}, state, {
                ValidateProcesstimer: action.payload.validateProcesstimer 
            })
        case 'SET_ADD_PROCESS_TIMER':
            return Object.assign({}, state, {
                AddProcesstimer: action.payload.addProcesstimer 
            })
        case 'SET_END_TIME':
            new_array = []
            state.ReadyQueue.map((process) => {
                        if(process.process == action.payload.process){
                                process.end_time = 'run' 
                                new_array.push(process)
                        }else{
                                process.status = 'paused'
                                new_array.push(process)
                        }
                            })
            return Object.assign({}, state, {
                ReadyQueue: new_array 
            })
        case 'SET_PROCESS_BURST':
                new_array = []
                state.ReadyQueue.map((process) => {
                        if(process.process == action.payload.process){
                                process.burst_time = action.payload.new_burst
                                new_array.push(process)
                        }else{
                                new_array.push(process)
                        }
                            })
            return Object.assign({}, state, {
                ReadyQueue: new_array 
            })           
        case 'SET_RUN_PROCESS':
            new_array = []
            state.ReadyQueue.map((process) => {
                        if(process.process == action.payload.process){
                                process.status = 'run' 
                                new_array.push(process)
                        }else{
                                process.status = 'paused'
                                new_array.push(process)
                        }
                            })
            return Object.assign({}, state, {
                ReadyQueue: new_array 
            })
        case 'SET_ACTUAL_INDEX_PROCESS':
            return Object.assign({}, state, {
                ActualIndexProcess: action.payload.actualIndexProcess 
            })
        default:
            return state
    } }

export default RoundRobinReducer;
