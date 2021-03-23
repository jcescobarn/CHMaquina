import { combineReducers } from 'redux'
import systemMemoryReducer from './systemMemoryReducer'

const rootReducer = combineReducers({
    systemMemory: systemMemoryReducer
})

export default rootReducer