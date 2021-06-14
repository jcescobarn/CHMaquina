import React from 'react'
import './QueueTable.css'
import { connect } from 'react-redux'
import { toogleMemoryEdit } from '../../store/actions/systemMemoryActions'

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
                            this.props.processQueueData.map((processData,index) => {
                                return (<tr key={index}>
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

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QueueTable)