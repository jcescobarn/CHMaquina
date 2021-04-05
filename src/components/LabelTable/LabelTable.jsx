import './LabelTable.css'
import React from 'react'

class LabelTable extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <table className="table table-hover labelTable table-wrapper-scroll-y">
                <thead>
                    <tr>
                        <th scope="col">Posición</th>
                        <th scope="col">Etiqueta</th>
                        <th scope="col">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.labelsData.map((labelData) => {
                            return (<tr>
                                <td>{labelData.memoryPos}</td>
                                <td>{labelData.name}</td>
                                <td>{labelData.value}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default LabelTable