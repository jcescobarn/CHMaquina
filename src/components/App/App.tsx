import './App.css';
import OSMemorySpace from '../OSMemorySpace/OSMemorySpace'
import MemorySpace from '../MemorySpace/MemorySpace'
import CodeTextArea from '../CodeTextArea/CodeTextArea';
import PrintArea from '../PrintArea/PrintArea';
import VarTable from '../VarTable/VarTable';
import LabelTable from '../LabelTable/LabelTable';
import QueueTable from '../QueueTable/QueueTable';
import CollectorTable from '../CollectorTable/CollectorTable';
import CurrentInstructionTable from '../CurrentInstructionTable/CurrentInstructionTable';
import Memory from '../Memory/Memory';



const App = () => (
  <div className="container-fluid">
    <div className="row mt-3">
      <div className="col-md-4">
        <button type="button" className="btn-sm w-50 button-color offset-md-6">Ejecución paso a paso</button>
        <div className="row">
          <div className="col-md-5">
            <OSMemorySpace />
          </div>
          <div className="col-md-5">
            <MemorySpace />
          </div>
        </div>
        <CodeTextArea />
      </div>
      <div className="col-md-5">
        <PrintArea />
        <div className="row">
          <div className="col-md-7">
            <VarTable />
            <LabelTable />
            <div className="row">
              <button type="button" className="btn-sm button-color col-md-6">Iniciar</button>
              <button type="button" className="btn-sm button-color col-md-6">Pausar</button>
            </div>
          </div>
          <div className="col-md-1">
            <QueueTable />
            <CollectorTable />
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <CurrentInstructionTable />
        <Memory />
      </div>

    </div>
  </div>
)


export default App;