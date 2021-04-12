import './Memory.css' // se importa la hoja de estilos del componente
import React from 'react' // se importa la libreria de react para tipar el componente
import { connect } from 'react-redux'


class Memory extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const array_data = this.props.memoryData.slice()
        console.log(this.props.memorySize )
        if(array_data.length < this.props.memorySize){
            for(let i = array_data.length; i < this.props.memorySize;i++){
                array_data.push('')
            }
        }

        return ( // se declara el componente
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
                <table className="table table-hover scroll">
                    <thead>
                        <tr>
                            <th>Estados</th>
                            <th>Posición</th>
                            <th>Instrucción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // se recorren las instrucciones guardadas en la memoria dentro del store para generar la tabla
                            array_data.map((instruction, index) => {

                                return (
                                    <tr key={index}>
                                        <td>1</td>
                                        <td>{index}</td>
                                        <td>{instruction}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    memorySize: state.systemMemory.memory_size,
    }
}

const mapDispatchToProps = (distpatch) => {
    return {

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Memory) // se exporta el componente