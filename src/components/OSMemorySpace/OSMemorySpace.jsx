import React from 'react'
import './OSMemorySpace.css'
import { store } from '../../store'
import { createRef } from 'react'
import { setOSOcuppiedMemory } from '../../store/actions/systemMemoryActions'
import { connect } from 'react-redux'





class OSMemorySpace extends React.Component {
   range_input = createRef();

   render() {
      return ( // se declara el componente con sus respectivos eventos y referencias
         <div className="OsMemorySpace ml-4 mt-3">
            <input type="range" className="form-control-range row" onChange={this.setMemorySpace} min="1" ref={this.range_input} max={store.getState().systemMemory.memory_size} />
            <div className="form-group row">
               <label htmlFor="memory" className="col-md-7 font">Espacio de memoria asociada a S.O. </label>
               <input placeholder={this.props.OSOccupiedMemory} type="text" className="col-md-4 memory form-control" id="memory" disabled />
            </div>
         </div>
      )
   }

   setMemorySpace = () => { // se modifica la variable de tamano para la memoria principal
      const value = this.range_input.current.value;
      this.props.setOSMemory(value)
   }
}

const mapStateToProps = (state) => {
   return {
      totalSystemMemory: state.systemMemory.memory_size,
      OSOccupiedMemory: state.systemMemory.OS_occupied_memory
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      setOSMemory: (value) => dispatch(setOSOcuppiedMemory(value))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(OSMemorySpace)