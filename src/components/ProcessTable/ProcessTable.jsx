import React from 'react'
import './ProcessTable.css'
import { createRef } from 'react'
import { setOSOcuppiedMemory, addOSMemorySpace, removeOSMemorySpace } from '../../store/actions/systemMemoryActions'
import { connect } from 'react-redux'


class ProcessTable extends React.Component {


   render() {
      return ( // se declara el componente con sus respectivos eventos y referencias

         <div className=" ml-4 mt-4 row">
                <div className="scrollbar"> 
                <table className="table table-bordered table-dark">
                        <thead>
                                <tr>
                                        <th>Proceso</th>
                                        <th>T. Llegada</th>
                                        <th>T. Rafaga</th>
                                        <th>T. Comienzo</th>
                                        <th>T. Finalización</th>
                                        <th>T. Retorno</th>
                                        <th>T.Espera</th>
                                </tr>
                        </thead>
                        <tbody>
                        {
                                this.props.readyQueue.map((process, index)=>{
                                                let rowclass = " "
                                                if(process.status == 'run'){
                                                        rowclass = 'bg-success'
                                                }
                                        return (
                                                <tr key={index} className={rowclass} >
                                                        <td>{process.process}</td>
                                                        <td>{process.arrive_time}</td>
                                                        <td>{process.burst_time}</td>
                                                        <td>{process.start_time}</td>
                                                        <td>{process.end_time}</td>
                                                        <td>{process.return_time}</td>
                                                        <td>{process.wait_time}</td>
                                                </tr>
                                        )
                                })
                                
                        }
                        </tbody>
                </table>
                </div>
         </div>

      )
   }

   
}

const mapStateToProps = (state) => {
   return {
      readyQueue: state.roundRobin.ReadyQueue,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      setOSMemory: (value) => dispatch(setOSOcuppiedMemory(value)),
      addOsMemorySpace: () => dispatch(addOSMemorySpace()),
      removeOsMemorySpace: () => dispatch(removeOSMemorySpace())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProcessTable)
