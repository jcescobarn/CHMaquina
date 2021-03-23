import React from 'react'
import './VarTable.css'

const VarTable: React.FC<{}> = () => (
    <table className="table table-hover">
        <thead>
            <tr>
                <th scope="col">Posición</th>
                <th scope="col">Id Proceso</th>
                <th scope="col">Variable</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0001</td>
                <td>01</td>
                <td>unidad</td>
            </tr>
            <tr>
                <td>0001</td>
                <td>01</td>
                <td>unidad</td>
            </tr>
        </tbody>
    </table>
)

export default VarTable