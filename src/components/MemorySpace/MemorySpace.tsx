import './MemorySpace.css'
import React from 'react'
import { store } from '../../store'
import {setOSOcuppiedMemory} from '../../store/actions/systemMemoryActions'
import { createRef } from 'react'

const number_input: React.LegacyRef<HTMLInputElement> = createRef();

const setOsOcuppiedMemory = () => {
    const value = number_input.current?.value;
    if(value !== undefined){
    store.dispatch(setOSOcuppiedMemory(parseInt(value)))
    }
 }

const MemorySpace: React.FC<{}> = () => (
    <div className=" ml-4 mt-4 memorySpaceContainer row">
        <label htmlFor="memorySpace" className="col-md-5 font">Espacio total de memoria</label>
        <input type="number" ref={number_input} onChange={setOsOcuppiedMemory} id="memorySpace" className="col-md-3 form-control memorySpace" min="0" placeholder={store.getState().systemMemory.memory_size} />
    </div>

)

export default MemorySpace