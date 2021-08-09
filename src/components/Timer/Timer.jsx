import React from 'react'
import './Timer.css'
import { createRef } from 'react'
import { setOSOcuppiedMemory, addOSMemorySpace, removeOSMemorySpace } from '../../store/actions/systemMemoryActions'
import { connect } from 'react-redux'


class Timer extends React.Component {
   range_input = createRef();

   render() {
           let otherData = this.findProcess();
      return ( // se declara el componente con sus respectivos eventos y referencias
        <div class="card" >
                <div class="card-body">
                        <h5 class="card-title">Contador</h5>
                        <p class="card-text">Tiempo Transcurrido: {this.props.actual_time} </p>
                        <p class="card-text">Proceso en ejecución: {this.props.actual_process} </p>
                        <p class="card-text">Rafaga: {otherData.burst_time}</p>
                        <p class="card-text">Tiempo Restante: {otherData.end_time - this.props.actual_time}</p>
                </div>
        </div>
      )
   }

   findProcess(){
        return this.props.processQueue.find(x => x.process == this.props.actual_process)
   }


}

const mapStateToProps = (state) => {
   return {
        actual_time: state.roundRobin.ActualTime,
        actual_process: state.roundRobin.ActualProcess,
        processQueue: state.roundRobin.ReadyQueue

   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      setOSMemory: (value) => dispatch(setOSOcuppiedMemory(value)),
      addOsMemorySpace: () => dispatch(addOSMemorySpace()),
      removeOsMemorySpace: () => dispatch(removeOSMemorySpace())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
