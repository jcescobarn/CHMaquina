import { combineReducers } from 'redux'
import systemMemoryReducer from './systemMemoryReducer.jsx'

const rootReducer = combineReducers({
    systemMemory: systemMemoryReducer
})

export default rootReducer