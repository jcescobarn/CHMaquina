import './MemorySpace.css'

const MemorySpace = () => (
    <div className=" ml-4 mt-4 memorySpaceContainer row">
        <label htmlFor="memorySpace" className="col-md-7 font">Espacio total de memoria</label>
        <input type="number" id="memorySpace" className="col-md-3 form-control memorySpace" min="0" />
    </div>

)

export default MemorySpace