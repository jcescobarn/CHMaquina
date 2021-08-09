import { combineReducers } from 'redux'
import systemMemoryReducer from './systemMemoryReducer.jsx'
import RoundRobinReducer from './RoundRobinReducer.jsx'

const rootReducer = combineReducers({
    systemMemory: systemMemoryReducer,
    roundRobin: RoundRobinReducer
})

export default rootReducer
