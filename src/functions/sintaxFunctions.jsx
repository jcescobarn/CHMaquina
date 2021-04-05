
// funcion que revisa la sintaxis de la instruccion Cargue
// todas las salidas estan tipadas con sintaxObject, un tipo de dato definido en el archivo types.tsx
const checkCargue = (instruction, instruction_line) => {// como parametros recibe la instruccion dividida en un array y el numero de linea
    const state = {
        sintax_state: oneArgumentFunctions(instruction), // se utiliza la funcion para revisar que tiene un solo argumento  y es una variable
        description: "",
        line: instruction_line
    };
    return state;
}

//funcion que revisa la sintaxis de la instruccion Almacene
const checkAlmacene = (instruction, instruction_line) => {// como parametros recibe la instruccion dividida en un array y el numero de linea
    const state = {
        sintax_state: oneArgumentFunctions(instruction), // se utiliza la funcion para revisar que tiene un solo argumento  y es una variable
        description: "",
        line: instruction_line
    };
    return state;
}

//funcion que revisa la sintaxis de la instruccion Nueva
const checkNueva = (instruction, instruction_line) => { // como parametros recibe la instruccion dividida en un array y el numero de linea
    const state = { // se inicializa la variable con la respuesta
        sintax_state: false,
        description: "",
        line: instruction_line
    };
    if (instruction.length === 4) { // se verifica la cantidad de parametros
        if (isVariable(instruction[1])) { // se verifica que el segundo parametro sea una variable
            switch (instruction[2]) { // se evalua el tipo  de variable definido
                case 'I':
                    if (!isNaN(parseInt(instruction[3]))) { //se evalua si se realizo una asignacion correcta
                        state.sintax_state = true; // en caso se ser correcto se modifica el valor del estado de la sintaxis a verdadero
                    } else {// en caso de no ser correcto se modifica la descripcion con el error
                        state.description = "Valor no compatible con el tipo de variable"
                    }
                    break;
                case 'L':
                    switch (instruction[3]) { // se evalua si el atributo es 0 para verdadero y 1 para false
                        case '0':
                            state.sintax_state = true; // si es correcto se modifica el estado de la sintaxis a verdadero
                            break;
                        case '1':
                            state.sintax_state = true;
                            break;
                        default: // si no es ninguno se devuelve el error
                            state.description = "Valor no compatible con el tipo de variable"
                            break;
                    }
                    break;
                case 'C':
                    state.sintax_state = true; // si es de tipo caracter e ingreso a este switch se asigna el ultimo parametro
                    break;
                case 'R': // se define si el tipo de caracter es real
                    if (!isNaN(parseFloat(instruction[3]))) {// se evalua si el numero es de punto flotante 
                        state.sintax_state = true;// en caso de ser verdadero se define el estado de la sintaxis como verdadero
                    } else { // si no se modifica la descripcion con el error
                        state.description = "Valor no compatible con el tipo de variable"
                    }
                    break;
                default: // en caso de que no conincida el tipo de variable se modifica la descripcion con el error
                    state.description = "No se reconoce el tipo de variable";
                    break;
            }
        }
    } else if (instruction.length === 3) { // se evalua si las variables se deben inicializar automaticamente

        switch (instruction[2]) {
            // dentro de este switch se evalua que el tipo definido coincida con los tipos
            // si coincide con alguno se asigna verdadero al estado de la sintaxis
            case "I":
                state.sintax_state = true;
                break;
            case "L":
                state.sintax_state = true;
                break;
            case "C":
                state.sintax_state = true;
                break;
            case "R":
                state.sintax_state = true;
                break;
            default:// en caso de no reconocer el tipo se modifica la descripcion con el error
                state.description = "No se reconoce el tipo de variable declarado";
                break;
        }
    } else { // en caso de no tener los parametros necesarios se modifica la descripcion con el error
        state.description = "Error de sintaxis, Por favor revise la cantidad de parametros";
    }
    return state; // se devuelve el objeto con el estado de la sintaxis
}

// funcion que verifica la sintaxis de la instruccion lea
const checkLea = (instruction, instruction_line) => { // como parametros recibe la instruccion dividida en un array y el numero de linea
    const state = {
        sintax_state: oneArgumentFunctions(instruction), // se utiliza la funcion para revisar que tiene un solo argumento  y es una variable
        description: "",
        line: instruction_line
    };
    return state;

}
//funcion que verifica la sintaxis de la instruccion Sume
const checkSume = (instruction, instruction_line) => { // como parametros recibe la instruccion dividida en un array y el numero de linea
    const state = {
        sintax_state: oneArgumentFunctions(instruction), // se utiliza la funcion para revisar que tiene un solo argumento  y es una variable
        description: "",
        line: instruction_line
    }
    return state;
}

//funcion verifica la sintaxis de la instruccion Reste
const checkReste = (instruction, instruction_line) => {// como parametros recibe la instruccion dividida en un array y el numero de linea
    const state = {
        sintax_state: oneArgumentFunctions(instruction), // se utiliza la funcion para revisar que tiene un solo argumento  y es una variable
        description: "",
        line: instruction_line
    }
    return state;
}
// funcion que verifica la sintaxis  de la instruccion Multiplique
const checkMultiplique = (instruction, instruction_line) => {// como parametros recibe la instruccion dividida en un array y el numero de linea
    const state = {
        sintax_state: oneArgumentFunctions(instruction),// se utiliza la funcion para revisar que tiene un solo argumento  y es una variable
        description: "",
        line: instruction_line
    }
    return state;

}

//funcion que verifica la sintaxis de la instruccion Divida
const checkDivida = (instruction, instruction_line) => {// como parametros recibe la instruccion dividida en un array y el numero de linea
    const state = {
        sintax_state: oneArgumentFunctions(instruction),// se utiliza la funcion para revisar que tiene un solo argumento  y es una variable
        description: "",
        line: instruction_line
    }
    return state;

}

//funcion que verifica la sintaxis de la instruccion potencia
const checkPotencia = (instruction, instruction_line) => {// como parametros recibe la instruccion dividida en un array y el numero de linea

    const state = {
        sintax_state: oneArgumentFunctions(instruction),// se utiliza la funcion para revisar que tiene un solo argumento  y es una variable
        description: "",
        line: instruction_line
    }
    return state;
}

// funcion que verifica la sintaxis de la instruccion Modulo
const checkModulo = (instruction, instruction_line) => {// como parametros recibe la instruccion dividida en un array y el numero de linea

    const state = {
        sintax_state: oneArgumentFunctions(instruction),// se utiliza la funcion para revisar que tiene un solo argumento  y es una variable
        description: "",
        line: instruction_line
    }
    return state;
}

// funcion que verifica la sintaxis de  la instruccion Concatener
const checkConcatene = (instruction, instruction_line) => {// como parametros recibe la instruccion dividida en un array y el numero de linea

    const state = {
        sintax_state: oneArgumentFunctions(instruction),// se utiliza la funcion para revisar que tiene un solo argumento  y es una variable
        description: "",
        line: instruction_line
    }
    return state;
}

//funcion que verifica la sintaxis de la instruccion elimine
const checkElimine = (instruction, instruction_line) => {// como parametros recibe la instruccion dividida en un array y el numero de linea
    const state = {
        sintax_state: oneArgumentFunctions(instruction),// se utiliza la funcion para revisar que tiene un solo argumento  y es una variable
        description: "",
        line: instruction_line
    }
    return state;
}

const checkExtraiga = (instruction, instruction_line) => {// como parametros recibe la instruccion dividida en un array y el numero de linea

    const state = {
        sintax_state: oneArgumentFunctions(instruction),// se utiliza la funcion para revisar que tiene un solo argumento  y es una variable
        description: "",
        line: instruction_line
    }
    return state;
}

const checkY = (instruction, instruction_line) => {// como parametros recibe la instruccion dividida en un array y el numero de linea
    const state = {
        sintax_state: false,
        description: "",
        line: instruction_line
    }
    if (instruction.length === 4) { // se evalua que se hayan digitado los 3 parametros
        if (isVariable(instruction[1]) && isVariable(instruction[2]) && isVariable(instruction[3])) { //se verifica que los 3 parametros sean variables
            state.sintax_state = true; // en caso de ser asi se modifica el estado de la sintaxis a verdadero
        }
        else { // si no se modifica la descripcion con el error
            state.description = "Por favor revise que los parametros de la función sean correctos";
        }
    } else {// si no se modifica la descripcion con el error
        state.description = "Por favor revise la cantidad de parametros ingresados"
    }
    return state;
}

const checkO = (instruction, instruction_line) => {// como parametros recibe la instruccion dividida en un array y el numero de linea
    const state = {
        sintax_state: false,
        description: "",
        line: instruction_line
    }
    if (instruction.length === 4) {
        if (isVariable(instruction[1]) && isVariable(instruction[2]) && isVariable(instruction[3])) {//se verifica que los 3 parametros sean variables
            state.sintax_state = true;// en caso de ser asi se modifica el estado de la sintaxis a verdadero
        }
        else {// si no se modifica la descripcion con el error
            state.description = "Por favor revise que los parametros de la función sean correctos";
        }
    } else {// si no se modifica la descripcion con el error
        state.description = "Por favor revise la cantidad de parametros ingresados"
    }
    return state;
}

const checkNO = (instruction, instruction_line) => {// como parametros recibe la instruccion dividida en un array y el numero de linea
    const state = {
        sintax_state: false,
        description: "",
        line: instruction_line
    }
    if (instruction.length === 3) {
        if (isVariable(instruction[1]) && isVariable(instruction[2])) {//se verifica que los 2 parametros sean variables
            state.sintax_state = true;// en caso de ser asi se modifica el estado de la sintaxis a verdadero
        }
        else {// si no se modifica la descripcion con el error
            state.description = "Por favor revise que los parametros de la función sean correctos";
        }
    } else {// si no se modifica la descripcion con el error
        state.description = "Por favor revise la cantidad de parametros ingresados"
    }
    return state;
}

const checkMuestre = (instruction, instruction_line) => {// como parametros recibe la instruccion dividida en un array y el numero de linea

    const state = {
        sintax_state: oneArgumentFunctions(instruction),// se utiliza la funcion para revisar que tiene un solo argumento  y es una variable
        description: "",
        line: instruction_line
    }
    return state;
}

const checkImprima = (instruction, instruction_line) => {// como parametros recibe la instruccion dividida en un array y el numero de linea
    const state = {
        sintax_state: oneArgumentFunctions(instruction),// se utiliza la funcion para revisar que tiene un solo argumento  y es una variable
        description: "",
        line: instruction_line
    }
    return state;
}

const checkVaya = (instruction, instruction_line) => {// como parametros recibe la instruccion dividida en un array y el numero de linea
    const state = {
        sintax_state: oneArgumentFunctions(instruction),// se utiliza la funcion para revisar que tiene un solo argumento  y es una variable
        description: "",
        line: instruction_line
    }
    return state;
}

const checkVayasi = (instruction, instruction_line) => {// como parametros recibe la instruccion dividida en un array y el numero de linea
    const state = {
        sintax_state: false,
        description: "",
        line: instruction_line
    }
    if (instruction.length === 3) {
        if (isVariable(instruction[1]) && isVariable(instruction[2])) {//se verifica que los 2 parametros sean variables
            state.sintax_state = true;
        } else {// si no se modifica la descripcion con el error
            state.description = "Por favor revise las etiquetas en el código";
        }
    } else {// si no se modifica la descripcion con el error
        state.description = "Por favor revise la cantidad de argumentos de la función";
    }
    return state;
}

const checkEtiqueta = (instruction, instruction_line) => {// como parametros recibe la instruccion dividida en un array y el numero de linea
    const state = {
        sintax_state: false,
        description: "",
        line: instruction_line
    }
    if (instruction.length === 3) {
        if(isVariable(instruction[1]) && !isNaN(parseInt(instruction[2])) ){ // se verifica que el primer parametro sea una variable y el segundo un entero
            state.sintax_state = true;
        }else{// si no se modifica la descripcion con el error
            state.description = "Por favor revise los argumentos ingresados";
        }
    }else{// si no se modifica la descripcion con el error
        state.description = "Por favor revise la cantidad de argumentos ingresados";
    }
    return state;
}

const checkRetorne = (instruction, instruction_line) => {// como parametros recibe la instruccion dividida en un array y el numero de linea
    const state = {
        sintax_state: false,
        description: "",
        line: instruction_line
    }
    if(instruction.length === 2){ // se verifica que solo exista un argumento
        state.sintax_state = true;
    }
    else{// si no se modifica la descripcion con el error
        state.description = "Por revise la cantidad de argumentos ingresados"
    }
    return state;
}

// chequeo de sintaxis para las funciones con una variable como único argumento 
const oneArgumentFunctions = (instruction) => {
    if (instruction.length === 2) {
        return (isVariable(instruction[1]))
    } else {
        return false
    }
}

// se evalua que el texto cumpla con las condiciones de ser una variable declaradas en el documento
const isVariable = (variable)=> {
    const descomposed = variable.split('')
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    return (typeof descomposed[0] === 'string' && !digits.includes(descomposed[0])) // se evalua que el primer caracter del nombre no sea un numero
}


const checkInstructionSintax = (instruction, instruction_line) => {// como parametros recibe la instruccion en un string y el numero de linea
    const descomposed_instruction = instruction.split(" "); // se descompone la instruccion en un arreglo
    let sintax_state; // se declara la variable que va a contener el resultdao
    switch (descomposed_instruction[0]) { // se utiliza un switch para saber cual es la instruccion y utilizar la funcion que verifica la sintaxis
        case "cargue":
            sintax_state = checkCargue(descomposed_instruction, instruction_line);
            break;
        case "almacene":
            sintax_state = checkAlmacene(descomposed_instruction, instruction_line);
            break;
        case "nueva":
            sintax_state = checkNueva(descomposed_instruction, instruction_line);
            break;
        case "lea":
            sintax_state = checkLea(descomposed_instruction, instruction_line);
            break;
        case "sume":
            sintax_state = checkSume(descomposed_instruction, instruction_line);
            break;
        case "reste":
            sintax_state = checkReste(descomposed_instruction, instruction_line);
            break;
        case "multiplique":
            sintax_state = checkMultiplique(descomposed_instruction, instruction_line);
            break;
        case "divida":
            sintax_state = checkDivida(descomposed_instruction, instruction_line);
            break;
        case "potencia":
            sintax_state = checkPotencia(descomposed_instruction, instruction_line);
            break;
        case "modulo":
            sintax_state = checkModulo(descomposed_instruction, instruction_line);
            break;
        case "concatene":
            sintax_state = checkConcatene(descomposed_instruction, instruction_line);
            break;
        case "elimine":
            sintax_state = checkElimine(descomposed_instruction, instruction_line);
            break;
        case "extraiga":
            sintax_state = checkExtraiga(descomposed_instruction, instruction_line);
            break;
        case "Y":
            sintax_state = checkY(descomposed_instruction, instruction_line);
            break;
        case "O":
            sintax_state = checkO(descomposed_instruction, instruction_line);
            break;
        case "NO":
            sintax_state = checkNO(descomposed_instruction, instruction_line);
            break;
        case "muestre":
            sintax_state = checkMuestre(descomposed_instruction, instruction_line);
            break;
        case "imprima":
            sintax_state = checkImprima(descomposed_instruction, instruction_line);
            break;
        case "vaya":
            sintax_state = checkVaya(descomposed_instruction, instruction_line);
            break;
        case "vayasi":
            sintax_state = checkVayasi(descomposed_instruction, instruction_line);
            break;
        case "etiqueta":
            sintax_state = checkEtiqueta(descomposed_instruction, instruction_line);
            break;
        case "retorne":
            sintax_state = checkRetorne(descomposed_instruction, instruction_line);
            break;
        default: // en caso de que no se reconozca la instruccion
            sintax_state = {
                sintax_state: false,
                description: "La función " + descomposed_instruction[0] + " no es reconocida por el sistema",
                line: instruction_line
            }
            break;
    }
    return sintax_state
}

export default checkInstructionSintax // se exporta la funcion para la revision de la sintaxis
