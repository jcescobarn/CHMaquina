import './MemorySpace.css'
import React from 'react'
import { store } from '../../store'
import { setMemorysize, setOSOcuppiedMemory } from '../../store/actions/systemMemoryActions'
import { connect } from 'react-redux'




class MemorySpace extends React.Component {

    numberInput = React.createRef();

    render() {
        return (
            <div className=" ml-4 mt-4 memorySpaceContainer row">
                <label htmlFor="memorySpace" className="col-md-5 font">Espacio total de memoria</label>
                <input type="number" ref={this.numberInput} onChange={this.setMemory} id="memorySpace" className="col-md-3 form-control memorySpace" min="0" value={this.props.memorySize} />
            </div>

        )
    }

    setMemory = () => {
        const value = this.numberInput.current.value;
        this.props.setMemory(value)
        if(value < this.props.OSOccupiedMemory){
            this.props.setOSOccupiedMemory(value)
        }

    }



}

const mapStateToProps = (state) => {
    return {
        memorySize: state.systemMemory.memory_size,
        OSOccupiedMemory: state.systemMemory.OS_occupied_memory
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMemory: (value) => dispatch(setMemorysize(value)),
        setOSOccupiedMemory: (value) => dispatch(setOSOcuppiedMemory(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemorySpace)