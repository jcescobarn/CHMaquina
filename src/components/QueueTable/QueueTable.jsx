import React from 'react'
import './QueueTable.css'

class QueueTable extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='processQueueTable table-wrapper-scroll-y'>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id Proceso</th>
                        <th scope="col">Proceso en Cola</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.processQueueData.map((processData) => {
                            return (<tr>
                                <td>{processData.id}</td>
                                <td>{processData.name}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
            </div>

        )
    }
}
export default QueueTable