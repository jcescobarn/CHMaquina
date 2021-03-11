import './OSMemorySpace.css'


const OSMemorySpace = () => (
   <div className="OsMemorySpace ml-4 mt-3">
       <input type="range" className="form-control-range row" min="0" max="5"/>
       <div className="form-group row">
       <label htmlFor="memory" className="col-md-8 font">Espacio de memoria asociada a S.O. </label>
       <input placeholder="5" type="text" className="col-md-2 memory form-control" id="memory" disabled/>
    </div>
   </div> 
);

export default OSMemorySpace;