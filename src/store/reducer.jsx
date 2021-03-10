import { exampleAction} from './actions/actionsExample'
import './types'

const initialState = { // objeto de estado inicial
    example: ''
}

// ejemplo de un reducer 
exampleFunction => (state = initialState, action) => {
    switch(action.type){
        case exampleAction: 
            return Object.assign({},state,{
                example: action.number 
            }) 
        default:
            return state
    }

}