import './CodeTextArea.css'
import React from 'react'
import checkInstructionSintax from '../../functions/sintaxFunctions'
import { setAddInstruction, addVariable } from '../../store/actions/systemMemoryActions'
import { connect } from 'react-redux'
 
class CodeTextArea extends React.Component {

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
    }
    else {

    }

  }

  checkSintax = () => { // se declara la funcion que revisa la sintaxis y carga a la memoria principal
    const instructions = this.textAreaRef.current.value.split('\n'); // se extrae el codigo almacenado en el text area y se divide en un arreglo por instrucciones
    let code_state = []; // se declara un array donde se almacenaran los resultados de las evaluaciones de sintaxis de las instrucciones
    let errors = [];
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
      console.log(this.props.memory.length)
    });
    if (code_sintax_state && this.props.memory.length + code_state.length < this.props.memorySize ) { // si no tiene ninguna instruccion erronea se carga a la memoria principal almacenada en el store
      instructions.forEach((instruction) => {
        if (instruction[0] !== '/' && instruction[1] !== '/') { // se omiten los comentarios
          this.props.addInstruction(instruction)
        }
      })
      alert("No hay errores de sintáxis, el programa será cargado") // en caso de no haber errores se muestra un mensaje de confirmacion
    }
    else {
      if(!code_sintax_state)
      alert("Errores en las lineas: " + errors) // en caso de haber errores se muestran las lineas erroneas
      else
      alert('No hay espacio suficiente en memoria')
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
        <textarea className="textArea" ref={this.textAreaRef} disabled>

        </textarea>
        <button type="button" className="btn-sm w-75 button-color offset-md-1" onClick={this.checkSintax}>Agregar a Cola</button>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    memory: state.systemMemory.memory,
    memorySize: state.systemMemory.memory_size
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addInstruction: (instruction)  => dispatch(setAddInstruction(instruction)),
    adddataVariable: (name,value,memoryPos) => dispatch(addVariable(name,value,memoryPos))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CodeTextArea)