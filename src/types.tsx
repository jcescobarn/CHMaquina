export interface example{
    data_example: number;
}

export interface sintaxObject{
    sintax_state:Boolean,
    description: String,
    line: number
}

export interface systemMemoryAction{
    type: string,
    payload: any
}

export interface systemMemoryInitialState{
    system_state: string,
    memory: string[],
    memory_size: number,
    OS_occupied_memory: number,
    Acumulador:any,
    variables: string[],
    etiquetas: string[]
}