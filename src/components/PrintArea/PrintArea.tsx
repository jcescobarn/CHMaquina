import './PrintArea.css'
import Printer from '../../assets/img/printer.png'
import Monitor from '../../assets/img/monitor.png'


const PrintArea = () => (
    <>
        <div className="col-md-9 offset-md-3">
            <img width="250" height="150" src={Monitor} alt="" className="monitor"></img>
            <textarea name="printerArea" id="printerArea" className="printerText" disabled></textarea>
        </div>
        <div className="col-md-9 offset-md-3 printer">
            <img width="250" height="150" src={Printer} alt="" />
            <textarea name="monitorArea" id="monitorArea" className="monitorText" disabled></textarea>
            <span className="stateLabel">Modo Kernel</span>
        </div>
    </>
)

export default PrintArea