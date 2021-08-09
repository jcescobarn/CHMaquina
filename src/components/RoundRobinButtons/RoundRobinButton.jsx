import React from 'react'
import { connect } from 'react-redux'
import { setAcumulador, setVariable, addPrinterData, addMonitorData, toggleSystemState, setCurrentInstruction } from '../../store/actions/systemMemoryActions'
import { setRunProcess, setActualIndexProcess, setActualProcess, setProcessBurst } from '../../store/actions/RoundRobinActions'


class RoundRobinButtons extends React.Component {

    constructor(props) { // se definen las variables necesarias para la ejecución del programa
        super(props)
        this.variables = this.props.variables
        this.labels = this.props.labels
        this.pointer = parseInt(this.props.OsMemory) + 1
        this.Acumulador = this.props.Acumulador
        this.execution_flag = true
    }

    componentDidUpdate() { // evento de actualización del componente 
        this.variables = this.props.variables
        this.labels = this.props.labels
    }
    //Algorithm functions
    bloque_process(processId, row){
                let time = this.props.actual_time
                let process = this.props.process_queue[this.props.actualIndexProcess]
                if(time < process.end_time && time >= process.start_time){
                }
                let rafagaTotal = process.burst_time
                this.props.setBurst(process.process,process.end_time - time)        
                //TODO Here 

            
    }
    resume_process(){
            //TODO need find an develop this function
    }
    Validate_process_in_ejecution(){
        let time = this.props.actual_time
        let queue_length = this.props.process_queue.length
        for(let indexProcess = this.props.actualIndexProcess; indexProcess < queue_length; indexProcess++){
                let intern_process = this.props.process_queue[indexProcess]
                if(intern_process.burst_time > this.props.consts.TIEMPOQUANTUM && 
                intern_process.start_time + this.props.consts.TIEMPOQUANTUM === time){
                        let indexBloquedProcess = this.bloque_process(indexProcess)
                        this.resume_process(indexBloquedProcess)
                }
                if(intern_process.start_time <= time && intern_process.end_time > time){
                        this.props.setExecutionProcess(intern_process.process)
                        this.prosp.setActualProcessIndex(indexProcess)
                }
        }
        
    }

    runAlgorithm = () => {

    }

    runCode = () => {
	this.props.toggleState()
	while ((this.pointer < this.props.memory.length) && this.execution_flag) {
		let instruction = this.props.memory[this.pointer]
		this.execution(instruction)
                const data = instruction.split(' ')
                if(data[0] != 'vayasi'){
                        this.pointer += 1
                }
        }
        this.pointer = parseInt(this.props.OsMemory) + 1
        this.props.setCurrentInst('-')
        this.props.toggleState()
    }
    

    execution = (instruction) => { // función que controla la ejecución del código cargado en la memoria principal
	    instruction = instruction.split(' ')
            switch (instruction[0]) {
                case 'cargue':
                    this.Cargue(instruction[1])
                    break;
                case 'almacene':
                    this.Almacene(instruction[1])
                    break;
                case 'lea':
                    this.Lea(instruction[1])
                    break;
                case 'sume':
                    this.Sume(instruction[1])
                    break;
                case 'reste':
                    this.Reste(instruction[1])
                    break;
                case 'multiplique':
                    this.Multiplique(instruction[1])
                    break;
                case 'divida':
                    this.Divida(instruction[1])
                    break;
                case 'potencia':
                    this.Potencia(instruction[1])
                    break;
                case 'modulo':
                    this.Modulo(instruction[1])
                    break;
                case 'concatene':
                    this.Concatene(instruction[1])
                    break;
                case 'elimine':
                    this.Elimine(instruction[1])
                    break;
                case 'extraiga':
                    this.Extraiga(instruction[1], instruction[2])
                    break;
                case 'y':
                    this.Y(instruction[1], instruction[2], instruction[3])
                    break;
                case 'o':
                    this.O(instruction[1], instruction[2], instruction[3])
                    break;
                case 'no':
                    this.NO(instruction[1], instruction[2])
                    break;
                case 'muestre':
                    this.Muestre(instruction[1])
                    break;
                case 'imprima':
                    this.Imprima(instruction[1])
                    break;
                case 'vaya':
                    this.Vaya(instruction[1])
                    break;
                case 'vayasi':
                    this.VayaSi(instruction[1], instruction[2])
                    break;
                case 'cambiar':
                    this.Cambiar(instruction[1], instruction[2])
                    break;
            }
         
   }



    render() { // función que renderiza el componente
	if(this.props.execution_mode == "normal"){
		return (<div className="row justify-content">
				<button type="button" className="btn-sm button-color col-md-6" onClick={this.run}>Iniciar</button>
				<button type="button" className="btn-sm button-color col-md-6">Pausar</button>
			</div>)
	}else{
		return (<div className="row justify-content">
				<button type="button" className="btn-sm button-color col-md-12 " onClick={this.stepByStep}>Siguiente</button>
			</div>)
	
	}
			
    }
		    // Parametros
		    // name: Nombre de la variable
    getVariable = (name) => { // función que encuentra el valor de una variable
	let found_data_variable = false;
	this.variables.map((variable) => {
		if (variable.name == name) {
		found_data_variable = variable;
		}
        })

        return found_data_variable
    }

    // Parametros
    // name_variable: Nombre de la variable
    // value: valor que se le asignará a la variable
    setVariable = (name_variable, value) => { // función que modifica el valor de una variable
        let temp_array = []
        this.variables.map((variable) => {
            if (variable.name == name_variable) {
                variable.value = value;
                temp_array.push(variable)
            } else {
                temp_array.push(variable)
            }
        })

        this.variables = temp_array
    }

    //parametros
    //label_name: Nombre de la etiqueta
    getLabel = (label_name) => {
        let found_data_label = false;
        this.labels.map((label) => {
            if (label.name == label_name) {
                found_data_label = label;
            }
        })

        return found_data_label
    }


    // se definen todas las funciones de ejecución del código CHMaquina


    //Parametros
    //variable_name: Nombre de la variable que se cargará en el acumulador
    Cargue = (variable_name) => { // función que carga en el acumulador el valor de la variable parámetro
        const variable = this.getVariable(variable_name)
        this.props.setAcumuladorFunction(variable.value)
        this.Acumulador = parseInt(variable.value)
    }

    //Parametros
    //variable_name: Nombre de la variable en la que se almacenará el valor del acumulador
    Almacene = (variable_name) => {
        const value = parseInt(this.Acumulador)
        this.props.setVariableFunction(variable_name, value)
    }

    Nueva = (/*variable*/) => {
        //TODO declaración de la variable. pendiente realizar validaciones
    }

    //parametros
    //variable_name: Nombre de la variable que se cargará en el acumulador
    Lea = (variable_name) => { // función que lee el valor ingresado por el usuario y lo almacena en una variable
        const value = prompt("Por favor ingrese el valor para la variable: " + variable_name)
        this.props.setVariableFunction(variable_name, value)
        this.setVariable(variable_name, value)
    }

    //parametros
    //variable_name: Nombre de la variable que se cargará en el acumulador
    Sume = (variable_name) => { // función que suma el valor de la variable ingresada al acumulador
        const variable = this.getVariable(variable_name)
        this.props.setAcumuladorFunction(parseInt(this.Acumulador) + parseInt(variable.value))
        this.Acumulador = parseInt(this.Acumulador) + parseInt(variable.value)
    }

    //parametros
    //variable_name: Nombre de la variable que se cargará en el acumulador 
    Reste = (variable_name) => {  // función que resta al acumulador el valor de la variable ingresada 
        const variable = this.getVariable(variable_name)
        this.props.setAcumuladorFunction(parseInt(this.Acumulador) - parseInt(variable.value))
        this.Acumulador = parseInt(this.props.Acumulador) - parseInt(variable.value)
    }

    //parametros
    //variable_name: Nombre de la variable que se cargará en el acumulador 
    Multiplique = (variable_name) => {// función que multiplica el acumulador por el valor de la variable ingresada
        const variable = this.getVariable(variable_name)
        this.props.setAcumuladorFunction(parseInt(this.Acumulador) * parseInt(variable.value))
        this.Acumulador = parseInt(this.props.Acumulador) * parseInt(variable.value)
    }

    //parametros
    //variable_name: Nombre de la variable que se cargará en el acumulador 
    Divida = (variable_name) => {// función que divide el acumulador por el valor de la variable ingresada
        const variable = this.getVariable(variable_name)
        this.props.setAcumuladorFunction(parseInt(this.Acumulador) / parseInt(variable.value))
        this.Acumulador = parseInt(this.Acumulador) / parseInt(variable.value)
    }

    //parametros
    //variable_name: Nombre de la variable que se cargará en el acumulador
    Potencia = (variable_name) => {// función que potencia el acumulador por el valor de la variable ingresada
        const variable = this.getVariable(variable_name)
        this.props.setAcumuladorFunction(Math.pow(parseInt(this.Acumulador), parseInt(variable.value)))
        this.Acumulador = Math.pow(parseInt(this.Acumulador), parseInt(variable.value))
    }

    //parametros
    //variable_name: Nombre de la variable que se cargará en el acumulador
    Modulo = (variable_name) => { //función que calcula el módulo entre el valor del acumulador y el valor de la variante ingresada para luego cargarlo en el acumulador 
        const variable = this.getVariable(variable_name)
        this.props.setAcumulador(this.Acumulador % parseInt(variable.value))
        this.Acumulador = parseInt(this.Acumulador) % parseInt(variable.value)
    }


    //parametros
    //variable_name: Nombre de la variable enviada a la función
    Concatene = (variable_name) => { // Función que concatena al valor del acumulador con el de la variable enviada como parametro
        const variable = this.getVariable(variable_name)
        this.props.setAcumuladorFunction(this.Acumulador + variable.value)

    }

    //Parametros
    //caracter: variable que contiene el caracter que desea retirar de la cadena del acumulador
    Elimine = (caracter) => {
        const Acumulador_string = this.Acumulador
        this.Acumulador = Acumulador_string.replace(caracter, '')
    }

    //Parametros
    //value: cantidad de caracteres que desea extraer de la cadena del acumulador
    //result_variable_name: nombre de la variable en la que se almacenará el resultado
    Extraiga = (value, result_variable_name) => { // función que extrae en una nueva variable una subcadena con los caracteres extraidos
        const temp = this.Acumulador
        const result = temp.substr(0, value)
        this.setVariable(result_variable_name, result)
        this.setVariableFunction(result_variable_name, value)
    }

    //Parametros
    //first_variable_name: nombre de la primera variable ingresada para la operación
    //second_variable_name: nombre de la segunda variable ingresada para la operación
    //result_variable_name: nombre de la variable que almacenará el resultado de la operación
    Y = (first_variable_name, second_variable_name, result_variable_name) => { // función que crear una operación lógica Y con dos variables y almacena el resultado en una variable
        const first_variable = this.getVariable(first_variable_name)
        const second_variable = this.getVariable(second_variable_name)
        const firts_value = (first_variable.value === '1') ? true : false;
        const second_value = (second_variable.value === '1') ? true : false;
        const result_value = firts_value && second_value
        this.props.setVariableFunction(result_variable_name, result_value)
        this.setVariable(result_variable_name, result_value)
    }

    //Parametros
    //first_variable_name: nombre de la primera variable ingresada para la operación
    //second_variable_name: nombre de la segunda variable ingresada para la operación
    //result_variable_name: nombre de la variable que almacenará el resultado de la operación
    O = (first_variable_name, second_variable_name, result_variable_name) => {// función que crear una operación lógica Y con dos variables y almacena el resultado en una variable
        const first_variable = this.getVariable(first_variable_name)
        const second_variable = this.getVariable(second_variable_name) 
        const firts_value = (first_variable.value === '1') ? true : false
        const second_value = (second_variable.value === '1') ? true : false
        const result_value = firts_value || second_value
        this.props.setVariableFunction(result_variable_name, result_value)
        this.setVariable(result_variable_name, result_value)
    }

    //Parametros
    //first_variable_name: nombre de la variable a la que se le aplicará la operación
    //result_variable_name: nombre de la variable donde se almacenará el resultado de la operación
    NO = (first_variable_name, result_variable_name) => { // función que niega el valor de una variable booleana y lo almacena en otra variable
        const variable = this.getVariable(first_variable_name)
        this.props.setVariableFunction(result_variable_name, !variable.value)
        this.setVariable(result_variable_name, !variable.value)
    }

    //Parametros
    //name_of_variable: nombre de la variable a ser mostrada
    Muestre = (name_of_variable) => { // función que imprime en la pantalla del computador el contenido de la variable ingresada
        const dataVariable = this.getVariable(name_of_variable)
        this.props.addDataMonitor(dataVariable.value)
    }

    //Parametros
    //name_of_variable: nombre de la variable a ser mostrada
    Imprima = (name_of_variable) => { // función que imprime en la impresora del computador el contenido de la variable ingresada
        const dataVariable = this.getVariable(name_of_variable)
        this.props.addDataPrinter(dataVariable.value)
    }

    //Parametros
    //label_name: nombre de la etiqueta a la cual debe redirigir
    Vaya = (label_name) => { //función que mueve el apuntador a la etiqueta proporcionada
        const label = this.getLabel(label_name)
        this.pointer = label.line
    }

    //Parametros
    //first_label: Nombre de la primera etiqueta
    //Second_label: Nombre de la segunda etiqueta
    VayaSi = (first_label_name, second_label_name) => {//función que redirige a una de las dos etiquetas según el valor en el acumulador
        if (this.Acumulador > 0) {
            const label = this.getLabel(first_label_name)
            this.pointer = label.line
        } else if (this.Acumulador < 0) {
            const label = this.getLabel(second_label_name)
            this.pointer = label.line
        }else {
            this.pointer += 1
        }
    }

    Etiqueta = (/*label*/) => {
       //TODO: se debe verificar que la etiqueta exista.
    }

    Retorne = () => {
        //TODO:se debe eliminar el programa en cuanto ejecute esta función.
    }

    //Parametros
    //first_variable_name: nombre de la primera variable
    //second_variable_name: nombre de la segunda variable
    Cambiar = (first_variable_name, second_variable_name) => {//función que intercambia los valores de dos variables distintas 
        let tempvalue
        const first_variable = this.getVariable(first_variable_name)
        const second_variable = this.getVariable(second_variable_name)
        tempvalue = first_variable.value
        this.setVariable(first_variable_name, second_variable.value)
        this.setVariable(second_variable_name, tempvalue)
    }
}

// función que convierte las variables de estado en el store en propiedades del componente
const mapStateToProps = (state) => {
    return {
        Acumulador: state.systemMemory.acumulador,
        variables: state.systemMemory.variables,
        printer: state.systemMemory.print_printer_area,
        OsMemory: state.systemMemory.OS_occupied_memory,
        labels: state.systemMemory.labels,
        memory: state.systemMemory.memory,
	execution_mode: state.systemMemory.execution_mode,
        actual_time: state.roundRobin.ActualTime,
        process_queue: state.roundRobin.ReadyQueue,
        actualIndexProcess: state.roundRobin.ActualIndexProcess,
        consts: state.roundRobin.consts
    }
}

// función que convierte las acciones del estado en el store en propiedades del componente
const mapDispatchToProps = (dispatch) => {
    return {
        setAcumuladorFunction: (value) => dispatch(setAcumulador(value)),
        setVariableFunction: (variable, value) => dispatch(setVariable(variable, value)),
        addDataMonitor: (data) => dispatch(addMonitorData(data)),
        addDataPrinter: (data) => dispatch(addPrinterData(data)),
        toggleState: () => dispatch(toggleSystemState()),
        setCurrentInst: (data) => dispatch(setCurrentInstruction(data)),
        setExecutionProcess: (process) => dispatch(setRunProcess(process)),
        setActualProcessIndex: (processIndex) => dispatch(setActualIndexProcess(processIndex)),
        setActualProcess: (process) => dipatch(setActualProcess(process)),
        setBurst: (processIndex, new_burst) => dispatch(setProcessBurst(processIndex,new_burst))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundRobinButtons)
