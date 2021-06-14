import React from 'react'
import './PrintArea.css'
import Printer from '../../assets/img/printer.png'
import Monitor from '../../assets/img/monitor.png'
import { connect } from 'react-redux'


class PrintArea extends React.Component {

    constructor(props) {
        super(props)
    }

    printer_area_ref = React.createRef()
    monitor_area_ref = React.createRef()
    componentDidUpdate() {
        let dataPrinter = ''
        let dataMonitor = ''
        console.log(this.props)
        this.props.printer_area_data.map((data) => {
            dataPrinter = dataPrinter+data + '\n'
        })

        this.props.monitor_area_data.map((data) => {
            dataMonitor = dataMonitor+data+ '\n'
        })

        this.printer_area_ref.current.value = dataPrinter 
        this.monitor_area_ref.current.value = dataMonitor 
    }

    render() {
        return (
            <>
                <div className="col-md-9 offset-md-3">
                    <img width="250" height="150" src={Monitor} alt="" className="monitor"></img>
                    <textarea name="printerArea" id="printerArea" className="printerText" ref={this.monitor_area_ref} disabled></textarea>
                </div>
                <div className="col-md-9 offset-md-3 printer">
                    <img width="250" height="150" src={Printer} alt="" />
                    <textarea name="monitorArea" id="monitorArea" className="monitorText" ref={this.printer_area_ref} disabled></textarea>
                    <span className="stateLabel">{this.props.system_state}</span>
                </div>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        system_state: state.systemMemory.system_state 
    }
}

export default connect(mapStateToProps)(PrintArea)