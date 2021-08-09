import './SJF.css';
import React from 'react'
import OSMemorySpace from '../OSMemorySpace/OSMemorySpace.jsx'
import MemorySpace from '../MemorySpace/MemorySpace.jsx'
import CodeTextArea from '../CodeTextArea/CodeTextArea.jsx';
import PrintArea from '../PrintArea/PrintArea.jsx';
import VarTable from '../VarTable/VarTable.jsx';
import LabelTable from '../LabelTable/LabelTable.jsx';
import QueueTable from '../QueueTable/QueueTable.jsx';
import CollectorTable from '../CollectorTable/CollectorTable.jsx';
import CurrentInstructionTable from '../CurrentInstructionTable/CurrentInstructionTable.jsx';
import Memory from '../Memory/Memory.jsx';
import ExecutionButtons from '../ExecutionButtons/ExecutionButtons'
import ModeButton from '../ModeButton/ModeButton';
import { connect } from 'react-redux';

// se crea el componente principal que dará estructura a los componentes para ser presentados en la interfaz
class SJF extends React.Component {

 render() {

  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-md-4">
         <ModeButton /> 
          <div className="row">
            <div className="col-md-6">
              <OSMemorySpace />
            </div>
            <div className="col-md-5">
              <MemorySpace />
            </div>
          </div>
          <CodeTextArea />
        </div>
        <div className="col-md-5">
          <PrintArea printer_area_data={this.props.print_printer_data}  monitor_area_data={this.props.print_monitor_data} />
          <div className="row">
            <div className="col-md-7">
              <VarTable varsData={this.props.variables}/>
              <LabelTable labelsData={this.props.labels} />
              <ExecutionButtons />
            </div>
            <div className="col-md-2">
              <QueueTable processQueueData={this.props.process_queue}/>
              <CollectorTable />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <CurrentInstructionTable />
          <Memory memoryData={this.props.memory} />
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

export default connect(mapStateToProps,null)(SJF); // se conecta el componente con el store y se exporta
