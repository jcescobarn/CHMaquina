import React from 'react'
import './VarTable.css'

class VarTable extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <table className="table table-wrapper-scroll-y table-hover varTable">
                <thead>
                    <tr>
                        <th scope="col">Posición</th>
                        <th scope="col">Variable</th>
                        <th scope="col">valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.varsData.map((dataVar) => {
                            return (<tr>
                                <td>{dataVar.memoryPos}</td>
                                <td>{dataVar.name}</td>
                                <td>{dataVar.value}</td>
                            </tr>)
                        })

                    }


                </tbody>
            </table>
        )
    }
}

export default VarTable