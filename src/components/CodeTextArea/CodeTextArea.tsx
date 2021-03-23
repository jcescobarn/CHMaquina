import React, { createRef } from 'react' // se importa la funciona para crear referencias
import './CodeTextArea.css'
import checkInstructionSintax from '../../functions/sintaxFunctions'
import { sintaxObject } from '../../types';
import { store } from '../../store'
import { setAddInstruction} from '../../store/actions/systemMemoryActions'



const text_area_ref: React.LegacyRef<HTMLTextAreaElement> = createRef(); // se crean referencias que permiten enlazar a un elemtno html

const input_file: React.LegacyRef<HTMLInputElement> = createRef();

const checkSintax = () => { // se declara la funcion que revisa la sintaxis y carga a la memoria principal
  const instructions: string[] = (text_area_ref.current?.value !== undefined) ? text_area_ref.current?.value.split('\n') : ['']; // se extrae el codigo almacenado en el text area y se divide en un arreglo por instrucciones
  let code_state: sintaxObject[] = []; // se declara un array donde se almacenaran los resultados de las evaluaciones de sintaxis de las instrucciones
  let errors:number[] = [];
  instructions.forEach((instruction, index) => { // se recorre el arreglo de las instrucciones
    if (instruction[0] !== '/' && instruction[1] !== '/') {
      code_state.push(checkInstructionSintax(instruction, index)); // se agrega el resultado al arreglo definido para almacenar las evaluaciones
    }
  });
  let code_sintax_state:Boolean = true;
  code_state.forEach((sintax_state) => { // se evalua si el arreglo tiene alguna instruccion erronea
    if(!sintax_state.sintax_state){
      code_sintax_state = false;
      errors.push(sintax_state.line);
    }
  });
if(code_sintax_state){ // si no tiene ninguna instruccion erronea se carga a la memoria principal almacenada en el store
  instructions.forEach((instruction) => {
    if (instruction[0] !== '/' && instruction[1] !== '/') { // se omiten los comentarios
      store.dispatch(setAddInstruction(instruction))
    }
  })
  alert("No hay errores de sintáxis, el programa será cargado") // en caso de no haber errores se muestra un mensaje de confirmacion
 }
 else{
  alert("Errores en las lineas: "+errors) // en caso de haber errores se muestran las lineas erroneas
 }
  console.log(store.getState().systemMemory.memory); // se imprime el contenido guardado en la memoria
}



const loadFile = () => { // funcion que carga el archivo al textarea
  const file: FileList | null | undefined = input_file.current?.files; // se toma el archivo cargado al elemento input
  if (file) {
    const reader = new FileReader(); // se declara una instancia de la clase FileReader
    reader.onloadend = (e) => { // se define lo que  se desea hacer con el texto leido
      const content = e?.target?.result;
      const text_area = text_area_ref.current;
      if (text_area && typeof content == 'string') {
        text_area.innerHTML = (content) ? content : ""; // se carga el contenido del texto al text area
      }
    }
    reader.readAsText(file[0]); // se ejecuta la lectura del texto
  }
  else {

  }
  return
}

const CodeTextArea: React.FC<{}> = (file_object) => ( // se define el componente junto con los eventos necesarios en los elementos html
  <>
    <div className="input-group mb-3 col-md-12">
      <div className="custom-file">
        <input type="file" className="custom-file-input" id="inputFile" accept=".ch" ref={input_file} />
        <label className="custom-file-label" htmlFor="inputFile" aria-describedby="inputGroupFileAddon02">Elija un archivo</label>
      </div>
      <div className="input-group-append">
        <button className="input-group-text" onClick={loadFile}>Cargar</button>
      </div>
    </div>
    <textarea className="textArea" ref={text_area_ref} disabled>

    </textarea>
    <button type="button" className="btn-sm w-75 button-color offset-md-1" onClick={checkSintax}>Agregar a Cola</button>
  </>
)

export default CodeTextArea