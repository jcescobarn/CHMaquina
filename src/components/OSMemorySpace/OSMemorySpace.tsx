import React from 'react'
import './OSMemorySpace.css'
import {store} from '../../store'
import {createRef} from 'react'
import {setMemorysize} from '../../store/actions/systemMemoryActions'


const range_input:React.LegacyRef<HTMLInputElement> = createRef(); 

const setMemorySpace = () => { // se modifica la variable de tamano para la memoria principal
 const value = range_input.current?.value;
 if(value !== undefined){
 store.dispatch(setMemorysize(parseInt(value))) // se genera el evento al store para realizar la modificacion
 }
}

const OSMemorySpace: React.FC<{}> = () => ( // se declara el componente con sus respectivos eventos y referencias
   <div className="OsMemorySpace ml-4 mt-3">
       <input type="range" className="form-control-range row" onChange={setMemorySpace} min="1" ref={range_input} max={store.getState().systemMemory.memory_size} />
       <div className="form-group row">
       <label htmlFor="memory" className="col-md-8 font">Espacio de memoria asociada a S.O. </label>
       <input placeholder={store.getState().systemMemory.OS_occupied_memory} type="text" className="col-md-2 memory form-control" id="memory" disabled/>
    </div>
   </div> 
);

export default OSMemorySpace; // se exporta el componente