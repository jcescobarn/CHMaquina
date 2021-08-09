import './RoundRobin.css';
import React from 'react'
import CodeTextArea from '../CodeTextArea/CodeTextArea.jsx';
import PrintArea from '../PrintArea/PrintArea.jsx';
import Timer from '../Timer/Timer.jsx';
import BloquedTable from '../BloquedTable/BloquedTable';
import ProcessTable from '../ProcessTable/ProcessTable.jsx';
import RoundRobinButtons from '../RoundRobinButtons/RoundRobinButton.jsx'
import { connect } from 'react-redux';

// se crea el componente principal que dará estructura a los componentes para ser presentados en la interfaz
class RoundRobin extends React.Component {

 render() {

  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-md-4">
         <CodeTextArea />

        </div>
        <div className="col-md-5">
          <PrintArea printer_area_data={this.props.print_printer_data}  monitor_area_data={this.props.print_monitor_data} />
          <div className="row">
            <div className="col-md-12">
                        <ProcessTable />
                        <RoundRobinButtons />
            </div>
          </div>
        </div>
        <div className="col-md-3">
                        <Timer />
        </div>

      </div>
    </div>
  )
}
}

const mapStateToProps = (state) => { // se convierten las variables de estado en propiedades del componente

    return {
      memory: state.systemMemory.memory,
      variables: state.systemMemory.variables,
      labels: state.systemMemory.labels,
      process_queue: state.systemMemory.process_queue,
      print_monitor_data: state.systemMemory.print_monitor_area,
      print_printer_data: state.systemMemory.print_printer_area

    }
}

export default connect(mapStateToProps,null)(RoundRobin); // se conecta el componente con el store y se exporta
