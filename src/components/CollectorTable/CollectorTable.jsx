import React from 'react'
import { connect } from 'react-redux'
import './CollectorTable'

class CollectorTable extends React.Component {

    render() {
        return (
            <table className="table table-hover col-md-5 collectorTable">
                <thead>
                    <tr>
                        <th>Acumulador</th>
                        <th>Ejecutando</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">{this.props.acumulador}</td>
                        <td className="text-center">{this.props.current_process}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) =>{
return {
    acumulador: state.systemMemory.acumulador,
    current_process: state.systemMemory.current_process
}
}

const mapDispatchToProps = (dispatch) =>{
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CollectorTable)