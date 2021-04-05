import './Memory.css' // se importa la hoja de estilos del componente
import React from 'react' // se importa la libreria de react para tipar el componente




class Memory extends React.Component {
    constructor(props){
        super(props)
    }
    render() {

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
                            this.props.memoryData.map((instruction, index) => {

                                return (
                                    <tr>
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

export default Memory // se exporta el componente