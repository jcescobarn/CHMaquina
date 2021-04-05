import React from 'react'
import { connect } from 'react-redux'

class CurrentInstructionTable extends  React.Component{

    render() {
        return (
            <table className="table table-hover col-md-12">
                <thead>
                    <tr>
                        <th scope="col" className="text-center">Instrucción Actual</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">{this.props.currentInstruction}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        currentInstruction: state.systemMemory.current_instruction
    }
}

export default connect(mapStateToProps)(CurrentInstructionTable)