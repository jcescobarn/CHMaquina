export const EXAMPLE_ACTION = 'EXAMPlE_ACTION' // se declara una variable con el nombre de la acción
// se declaran todas las que se quieran

export function exampleAction(number){ // se retorna la constante con el nombre y el valor que recibe la función
    return { type: EXAMPLE_ACTION, number}
}