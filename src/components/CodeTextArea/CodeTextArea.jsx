import './CodeTextArea.css'
import React from 'react'
import checkInstructionSintax from '../../functions/sintaxFunctions'
import { setAddInstruction, addVariable, addLabel, addProcess, toogleMemoryEdit } from '../../store/actions/systemMemoryActions'
import { connect } from 'react-redux'


class CodeTextArea extends React.Component {

  constructor(props){
    super(props)
    this.current_file = ''
  }

  inputFile = React.createRef();
  textAreaRef = React.createRef();


  loadFile = () => { // funcion que carga el archivo al textarea
    const file = this.inputFile.current.files; // se toma el archivo cargado al elemento input
    if (file) {
      const reader = new FileReader(); // se declara una instancia de la clase FileReader
      reader.onloadend = (e) => { // se define lo que  se desea hacer con el texto leido
        const content = e.target.result;
        const text_area = this.textAreaRef.current;
        if (text_area && typeof content == 'string') {
          text_area.innerHTML = (content) ? content : ""; // se carga el contenido del texto al text area
        }
      }
      reader.readAsText(file[0]); // se ejecuta la lectura del texto
      this.current_file = file[0].name
    }
    else {

    }

  }

  checkSintax = () => { // se declara la funcion que revisa la sintaxis y carga a la memoria principaljj
    const instructions = this.textAreaRef.current.value.split('\n'); // se extrae el codigo almacenado en el text area y se divide en un arreglo por instrucciones
    let code_state = []; // se declara un array donde se almacenaran los resultados de las evaluaciones de sintaxis de las instrucciones
    let errors = [];// se declara un array para almacenar los errores de sintaxis 
    let variables = []; // se declara un array para almacenar las variables contenidas en el código
    let labels = []; // se declara un array para almacenar las variables contenidas en el código
    instructions.forEach((instruction, index) => { // se recorre el arreglo de las instrucciones
      if (instruction[0] !== '/' && instruction[1] !== '/') {
        code_state.push(checkInstructionSintax(instruction, index)); // se agrega el resultado al arreglo definido para almacenar las evaluaciones
      }
    });
    let code_sintax_state = true;
    code_state.forEach((sintax_state) => { // se evalua si el arreglo tiene alguna instruccion erronea
      if (!sintax_state.sintax_state) {
        code_sintax_state = false;
        errors.push(sintax_state.line);
      }
    });
    if (code_sintax_state && this.props.memory.length + code_state.length < this.props.memorySize) { // si no tiene ninguna instruccion erronea se carga a la memoria principal almacenada en el store
      instructions.forEach((instruction) => {
        if (instruction[0] !== '/' && instruction[1] !== '/') { // se omiten los comentarios
          let temp = instruction.split(' ')
          if (temp[0] === 'nueva') { // en caso de que la instrucción sea la creación de una variable se agrega el arreglo de variables
            variables.push(temp)
          } else if (temp[0] === 'etiqueta') { // en caso de que la instrucción sea la creación de una etiqueta se agrega el arreglo de etiquetas 
            labels.push(temp)
          }
          this.props.addInstruction(instruction)
        }
      })
      alert("No hay errores de sintáxis, el programa será cargado") // en caso de no haber errores se muestra un mensaje de confirmacion
      variables.forEach((variable, index) => { // se recorre el arreglo de las variables
        let value;
        if (variable.length === 3) { // se evalúa si las variables deben ser inicializadas de manera automática
          switch (variable[2]) { // se define el tipo de variable declarada y se inicializa la variables de acuerdo a eso
            case 'C':
              value = ' '
              break;
            case 'I':
              value = 0;
              break;
            case 'L':
              value = 0;
          }
        } else { // en caso de que el usuario haya inicializado la variable se asigna el valor entregado por el usuario
          value = variable[3]
        }
        this.props.addDataVariable(variable[1], value, this.props.memory.length + code_state.length + index, variable[2], this.current_file) // se agregan al array general de variables
        this.props.addInstruction('Variable ' + variable[1]) // se asigna el espacio de memoria a la variables
      })
      labels.forEach((label, index) => { // se recorre el arreglo de las etiquetas
        this.props.addDataLabel(label[1], parseInt(label[2]) + this.props.memory.length, this.props.memory.length + code_state.length + index + variables.length, this.current_file) // se agrega la etiqueta al arreglo general de etiquetas
        this.props.addInstruction('Etiqueta ' + label[2]) // se asigna un espacio de memoria para la etiqueta
      })
      if (this.props.processList.length === 0) { // si es la primera vez que se carga un proceso carga un false a la variable memory_edit y desactiva la configuración de memoria del sistema
        this.props.toogleEditMemory();
      }
      this.props.addNewProcess(this.props.processList.length, this.current_file)
    }
    else {
      if (!code_sintax_state)
        alert("Errores en las lineas: " + errors) // en caso de haber errores se muestran las lineas erroneas
      else
        alert('No hay espacio suficiente en memoria') // si no hay memoria suficiente notifica al usuario
    }

  }

  render() {
    return ( // se define el componente junto con los eventos necesarios en los elementos html
      <>
        <div className="input-group mb-3 col-md-12">
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="inputFile" accept=".ch" ref={this.inputFile} />
            <label className="custom-file-label" htmlFor="inputFile" aria-describedby="inputGroupFileAddon02">Elija un archivo</label>
          </div>
          <div className="input-group-append">
            <button className="input-group-text" onClick={this.loadFile}>Cargar</button>
          </div>
        </div>
        <textarea className="textArea" ref={this.textAreaRef} >

        </textarea>
        <button type="button" className="btn-sm w-75 button-color offset-md-1" onClick={this.checkSintax}>Agregar a Cola</button>
      </>
    )
  }
}
// se utiliza react-redux para conectar el componente con el estado central
const mapStateToProps = (state) => {  // se convierten las variables de estado en propiedades del componente
  return {
    memory: state.systemMemory.memory,
    memorySize: state.systemMemory.memory_size,
    processList: state.systemMemory.process_queue,
 
  }
}

const mapDispatchToProps = (dispatch) => { // se convierten las acciones en propiedades del componente
  return {
    addInstruction: (instruction) => dispatch(setAddInstruction(instruction)),
    addDataVariable: (name, value, memoryPos, type,file) => dispatch(addVariable(name, value, memoryPos, type,file)),
    addDataLabel: (name, line, memoryPos,file) => dispatch(addLabel(name, line, memoryPos,file)),
    addNewProcess: (id, name) => dispatch(addProcess(id, name)),
    toogleEditMemory: () => dispatch(toogleMemoryEdit())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeTextArea) // se conecta el componente con el store y se exporta