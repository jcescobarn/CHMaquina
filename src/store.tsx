import { createStore } from 'redux'; // se importa la funcion para crear el store
import rootReducer from './store/reducers/index' // se importa el reducer principal



export const store = createStore(rootReducer); // se crea y se exporta el store
