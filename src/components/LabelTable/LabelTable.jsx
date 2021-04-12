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
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.labelsData.map((labelData,index) => {
                            return (<tr key={index}>
                                <td>{labelData.memoryPos}</td>
                                <td>{labelData.name}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default LabelTable