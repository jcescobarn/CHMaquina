import React from 'react'
import { connect } from 'react-redux'
import { setAcumulador, setVariable, addPrinterData, addMonitorData, toggleSystemState, setCurrentInstruction } from '../../store/actions/systemMemoryActions'



class ExecutionButtons extends React.Component {

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

    stepByStep(){
	//TODO: Se debe implementar la función de ejecución uno a uno
        this.props.toggleState()
	//TODO: Ejecución del paso según la posición de memoria
        this.props.setCurrentInst('Cambiar por instrucción siguiente')
        this.props.toggleState()
    }

    run(){
	//TODO: Se debe implementar la función de ejecución completa
        this.props.toggleState()
	//TODO: Ejecución de todas las lineas presentes en la memoria ram
        this.props.setCurrentInst('-')
        this.props.toggleState()
    }
    

    execution = () => { // función que controla la ejecución del código cargado en la memoria principal
	//TODO: Se debe modificar esta función para que ejecute una instrucción recibida por medio de un parámetro

        while (this.pointer < this.props.memory.length && this.execution_flag) {
            let temp = this.props.memory[this.pointer]
            this.props.setCurrentInst(temp)
            temp = temp.split(' ')
            switch (temp[0]) {
                case 'cargue':
                    this.Cargue(temp[1])
                    break;
                case 'almacene':
                    this.Almacene(temp[1])
                    break;
                case 'lea':
                    this.Lea(temp[1])
                    break;
                case 'sume':
                    this.Sume(temp[1])
                    break;
                case 'reste':
                    this.Reste(temp[1])
                    break;
                case 'multiplique':
                    this.Multiplique(temp[1])
                    break;
                case 'divida':
                    this.Divida(temp[1])
                    break;
                case 'potencia':
                    this.Potencia(temp[1])
                    break;
                case 'modulo':
                    this.Modulo(temp[1])
                    break;
                case 'concatene':
                    this.Concatene(temp[1])
                    break;
                case 'elimine':
                    this.Elimine(temp[1])
                    break;
                case 'extraiga':
                    this.Extraiga(temp[1], temp[2])
                    break;
                case 'y':
                    this.Y(temp[1], temp[2], temp[3])
                    break;
                case 'o':
                    this.O(temp[1], temp[2], temp[3])
                    break;
                case 'no':
                    this.NO(temp[1], temp[2])
                    break;
                case 'muestre':
                    this.Muestre(temp[1])
                    break;
                case 'imprima':
                    this.Imprima(temp[1])
                    break;
                case 'vaya':
                    this.Vaya(temp[1])
                    break;
                case 'vayasi':
                    this.VayaSi(temp[1], temp[2])
                    break;
                case 'cambiar':
                    this.Cambiar(temp[1], temp[2])
                    break;
            }
            this.pointer += 1
            
        }
        this.pointer = parseInt(this.props.OsMemory) + 1

   }



    render() { // función que renderiza el componente
	//TODO: Se debe implementar la renderización del boton de paso a paso según el estado.
	//TODO: Se deben implementar en cada uno de los eventos de los distintos botones la funcion de ejecución correspondiente
        return (<div className="row">
            <button type="button" className="btn-sm button-color col-md-6" onClick={this.execution}>Iniciar</button>
            <button type="button" className="btn-sm button-color col-md-6">Pausar</button>
        </div>)
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
        this.Acumulador = variable.value
    }

    //Parametros
    //variable_name: Nombre de la variable en la que se almacenará el valor del acumulador
    Almacene = (variable_name) => {
        const value = this.Acumulador
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
        this.Acumulador = this.Acumulador % parseInt(variable.value)
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
        memory: state.systemMemory.memory
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
        setCurrentInst: (data) => dispatch(setCurrentInstruction(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExecutionButtons)
