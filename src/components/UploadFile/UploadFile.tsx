import './UploadFile.css'

const UploadFile = () => (
      <div className="input-group mb-3 col-md-12">
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="inputGroupFile02" />
          <label className="custom-file-label" data-buttonText="Elegir" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Elija un archivo</label>
        </div>
        <div className="input-group-append">
          <span className="input-group-text btn" id="inputGroupFileAddon02">Cargar</span>
        </div>
      </div> 
)

export default UploadFile;