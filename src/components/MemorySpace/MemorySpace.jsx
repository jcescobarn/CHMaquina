import './MemorySpace.css'
import React from 'react'
import { setMemorysize, setOSOcuppiedMemory, removeOSMemorySpace } from '../../store/actions/systemMemoryActions'
import { connect } from 'react-redux'




class MemorySpace extends React.Component {

    numberInput = React.createRef();

    render() {
        return (
            <div className=" ml-4 mt-4 memorySpaceContainer row">
                <label htmlFor="memorySpace" className="col-md-5 font">Espacio total de memoria</label>
                <input type="number" ref={this.numberInput} onChange={this.setMemory} id="memorySpace" className="col-md-3 form-control memorySpace" min="2" value={this.props.memorySize} disabled={!this.props.memory_edit} />
            </div>
        )
    }

    setMemory = () => {
        const value = this.numberInput.current.value;
        this.props.setMemory(value)
        if (parseInt(value) < parseInt(this.props.OSOccupiedMemory)) {
            this.props.setOSOccupiedMemory(value)
            this.props.removeOsMemorySpace()
            if(parseInt(value) === 2){
            this.props.removeOsMemorySpace()
            this.props.setOSOccupiedMemory(value-1)
            }
        }

    }



}

const mapStateToProps = (state) => {
    return {
        memorySize: state.systemMemory.memory_size,
        OSOccupiedMemory: state.systemMemory.OS_occupied_memory,
        memory_edit: state.systemMemory.memory_edit
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMemory: (value) => dispatch(setMemorysize(value)),
        setOSOccupiedMemory: (value) => dispatch(setOSOcuppiedMemory(value)),
        removeOsMemorySpace: () => dispatch(removeOSMemorySpace())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemorySpace)