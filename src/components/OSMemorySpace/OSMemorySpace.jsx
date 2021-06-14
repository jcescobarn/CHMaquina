import React from 'react'
import './OSMemorySpace.css'
import { createRef } from 'react'
import { setOSOcuppiedMemory, addOSMemorySpace, removeOSMemorySpace } from '../../store/actions/systemMemoryActions'
import { connect } from 'react-redux'


class OSMemorySpace extends React.Component {
   range_input = createRef();

   render() {
      return ( // se declara el componente con sus respectivos eventos y referencias

         <div className=" ml-4 mt-4 memorySpaceContainer row">
            <label htmlFor="memorySpace" className="col-md-5 font">Espacio total de memoria asociada a S.O</label>
            <input type="number" ref={this.range_input} value={this.props.OSOccupiedMemory} onChange={this.setMemorySpace} id="memorySpace" className="col-md-3 form-control memorySpace" min="1" max={this.props.totalSystemMemory}  disabled={!this.props.memory_edit}/>
         </div>

      )
   }

   setMemorySpace = () => { // se modifica la variable de tamano para la memoria principal
      const value = this.range_input.current.value; // variable que almacena el valor total del espacio del sistema operativo ingresado por el usuario
      const os_current_memory = this.props.OSOccupiedMemory; // variable que almacena el total del espacio del sistema operativo almacenado en el sistema
      if(parseInt(value) < this.props.totalSystemMemory){
      if (parseInt(value) > os_current_memory) { // en caso de que el usuario aumente el tamaño se agregarán en memoria los espacios para el sistema operativo
         for (let i = 0; i < value - os_current_memory; i++) {
            this.props.addOsMemorySpace()
         }
      } else if (parseInt(value) < os_current_memory) { // en caso de que el usuario aumente el tamaño se agregarán en memoria los espacios para el sistema operativo

         for (let i = 0; i < os_current_memory - value; i++) {

            this.props.removeOsMemorySpace()
         }
      }
      this.props.setOSMemory(value); // se realiza la modificación en la variable de tamaño de SO
   }else{
      alert("Excede el espacio en memoeria")
   }
   }
}

const mapStateToProps = (state) => {
   return {
      totalSystemMemory: state.systemMemory.memory_size,
      OSOccupiedMemory: state.systemMemory.OS_occupied_memory,
      memory: state.systemMemory.memory,
      memory_edit: state.systemMemory.memory_edit
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      setOSMemory: (value) => dispatch(setOSOcuppiedMemory(value)),
      addOsMemorySpace: () => dispatch(addOSMemorySpace()),
      removeOsMemorySpace: () => dispatch(removeOSMemorySpace())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(OSMemorySpace)