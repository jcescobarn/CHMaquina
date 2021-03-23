import React from 'react'

const CollectorTable: React.FC<{}> = () => (
    <table className="table table-hover col-md-5">
        <thead>
            <tr>
                <th>Acumulador</th>
                <th>Ejecutando</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="text-center">0</td>
                <td>factorial.ch</td>
            </tr>
        </tbody>
    </table>
)

export default CollectorTable