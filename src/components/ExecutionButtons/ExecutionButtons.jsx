import React from 'react'
import { connect } from 'react-redux'
import { setAcumulador, setVariable, addPrinterData, addMonitorData } from '../../store/actions/systemMemoryActions'



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

    execution = () => { // función que controla la ejecución del código cargado en la memoria principal
        while (this.pointer < this.props.memory.length && this.execution_flag) {
            let temp = this.props.memory[this.pointer]
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
                    this.Elimine()
                    break;
                case 'extraiga':
                    this.Extraiga()
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
            setInterval(100000)
        }
        this.pointer = parseInt(this.props.OsMemory) + 1
    }



    render() { // función que renderiza el componente
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

    Nueva = (variable) => {

    }

    Lea = (variable_name) => {
        const value = prompt("Por favor ingrese el valor para la variable: " + variable_name)
        this.props.setVariableFunction(variable_name, value)
        this.setVariable(variable_name, value)
    }

    Sume = (variable_name) => {
        const variable = this.getVariable(variable_name)
        this.props.setAcumuladorFunction(parseInt(this.Acumulador) + parseInt(variable.value))
        this.Acumulador = parseInt(this.Acumulador) + parseInt(variable.value)
    }

    Reste = (variable_name) => {
        const variable = this.getVariable(variable_name)
        this.props.setAcumuladorFunction(parseInt(this.Acumulador) - parseInt(variable.value))
        this.Acumulador = parseInt(this.props.Acumulador) - parseInt(variable.value)
    }

    Multiplique = (variable_name) => {
        const variable = this.getVariable(variable_name)
        this.props.setAcumuladorFunction(parseInt(this.Acumulador) * parseInt(variable.value))
        this.Acumulador = parseInt(this.props.Acumulador) * parseInt(variable.value)
    }

    Divida = (variable_name) => {
        const variable = this.getVariable(variable_name)
        this.props.setAcumuladorFunction(parseInt(this.Acumulador) / parseInt(variable.value))
        this.Acumulador = parseInt(this.Acumulador) / parseInt(variable.value)
    }

    Potencia = (variable_name) => {
        const variable = this.getVariable(variable_name)
        this.props.setAcumuladorFunction(Math.pow(parseInt(this.Acumulador), parseInt(variable.value)))
        this.Acumulador = Math.pow(parseInt(this.Acumulador), parseInt(variable.value))
    }

    Modulo = (variable_name) => {
        const variable = this.getVariable(variable_name)
        this.props.setAcumulador(this.Acumulador % parseInt(variable.value))
        this.Acumulador = this.Acumulador % parseInt(variable.value)
    }

    Concatene = (variable_name) => {
        const variable = this.getVariable(variable_name)
        this.props.setAcumuladorFunction(this.Acumulador + variable.value)

    }

    Elimine = (String) => {

    }

    Extraiga = (value) => {

    }

    Y = (first_variable, second_variable, result_variable) => {
        const firts_value = (first_variable === '1') ? true : false;
        const second_value = (second_variable === '1') ? true : false;
        const result_value = firts_value && second_value
        this.props.setVariableFunction(result_variable, result_value)
        this.setVariable(result_variable, result_value)
    }

    O = (first_variable, second_variable, result_variable) => {
        const firts_value = (first_variable === '1') ? true : false
        const second_value = (second_variable === '1') ? true : false
        const result_value = firts_value || second_value
        this.props.setVariableFunction(result_variable, result_value)
        this.setVariable(result_variable, result_value)
    }

    NO = (first_variable, result_variable) => {
        const variable = this.getVariable(first_variable)
        this.props.setVariableFunction(result_variable, !variable.value)
        this.setVariable(result_variable, !variable.value)
    }

    Muestre = (name_of_variable) => {
        const dataVariable = this.getVariable(name_of_variable)
        this.props.addDataMonitor(dataVariable.value)
    }

    Imprima = (name_of_variable) => {
        const dataVariable = this.getVariable(name_of_variable)
        this.props.addDataPrinter(dataVariable.value)
    }

    Vaya = (label_name) => {
        const label = this.getLabel(label_name)
        this.pointer = label.line
    }

    VayaSi = (first_label, second_label) => {
        if (this.Acumulador > 0) {
            const label = this.getLabel(first_label)
            this.pointer = label.line
        } else if (this.Acumulador < 0) {
            const label = this.getLabel(second_label)
            this.pointer = label.line
        }
    }

    Etiqueta = (label) => {

    }
    Retorne = () => {
        //TODO se debe eliminar el programa en cuanto ejecute 
    }

    // la función cambiar intercambia los valores de dos variables distintas 
    Cambiar = (first_variable_name, second_variable_name) => {
        let tempvalue
        const first_variable = this.getVariable(first_variable_name)
        const second_variable = this.getVariable(second_variable_name)
        tempvalue = first_variable.value
        this.setVariable(first_variable_name, second_variable.value)
        this.setVariable(second_variable_name, tempvalue)
    }
}

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

const mapDispatchToProps = (dispatch) => {
    return {
        setAcumuladorFunction: (value) => dispatch(setAcumulador(value)),
        setVariableFunction: (variable, value) => dispatch(setVariable(variable, value)),
        addDataMonitor: (data) => dispatch(addMonitorData(data)),
        addDataPrinter: (data) => dispatch(addPrinterData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExecutionButtons)