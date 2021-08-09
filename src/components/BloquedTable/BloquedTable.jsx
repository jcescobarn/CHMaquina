import React from 'react'
import './BloquedTable.css'
import { createRef } from 'react'
import { setOSOcuppiedMemory, addOSMemorySpace, removeOSMemorySpace } from '../../store/actions/systemMemoryActions'
import { connect } from 'react-redux'


class BloquedTable extends React.Component {
   range_input = createRef();

   render() {
      return ( // se declara el componente con sus respectivos eventos y referencias
        <table className="table">
                <thead>
                        <tr>
                                <th>Proceso</th>
                                <th>Bloqueo</th>
                                <th>Rafaga</th>
                        </tr>
                </thead>
                <tbody>
                {
                        this.props.bloquedQueue.map((process,index) => {
                                return (
                                        <tr key={index}>
                                                <td>{process.process}</td>
                                                <td>{process.bloking}</td>
                                                <td>{process.brust}</td>
                                        </tr>
                                       )

                                        })

                }

                </tbody>
        </table>
      )
   }

}

const mapStateToProps = (state) => {
   return {
      bloquedQueue: state.roundRobin.BloquedQueue,
      }
}

const mapDispatchToProps = (dispatch) => {
   return {
      setOSMemory: (value) => dispatch(setOSOcuppiedMemory(value)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(BloquedTable)
