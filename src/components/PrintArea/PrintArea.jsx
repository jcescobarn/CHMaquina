import React from 'react'
import './PrintArea.css'
import Printer from '../../assets/img/printer.png'
import Monitor from '../../assets/img/monitor.png'
import { store } from '../../store'


class PrintArea extends React.Component {
    render() {
        return(
            <>
                <div className="col-md-9 offset-md-3">
                    <img width="250" height="150" src={Monitor} alt="" className="monitor"></img>
                    <textarea name="printerArea" id="printerArea" className="printerText" disabled></textarea>
                </div>
                <div className="col-md-9 offset-md-3 printer">
                    <img width="250" height="150" src={Printer} alt="" />
                    <textarea name="monitorArea" id="monitorArea" className="monitorText" disabled></textarea>
                    <span className="stateLabel">{store.getState().systemMemory.system_state}</span>
                </div>
            </>
        )
    }
}

export default PrintArea