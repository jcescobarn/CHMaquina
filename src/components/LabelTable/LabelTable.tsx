import './LabelTable.css'

const LabelTable = () =>( 
    <table className="table table-hover">
        <thead>
            <tr>
                <th scope="col">Posición</th>
                <th scope="col">Id Proceso</th>
                <th scope="col">Etiqueta</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>00023</td>
                <td>001</td>
                <td>inicio</td>
            </tr>
            <tr>
                <td>00024</td>
                <td>00000</td>
                <td>fin</td>
            </tr>
        </tbody>
    </table>
)

export default LabelTable