import './ModeButton.css'
import React from 'react'
import {connect} from 'react-redux'
import {toogleExecutionMode} from '../../store/actions/systemMemoryActions'


class ModeButton extends React.Component{

	render(){
		if(this.props.execution_mode == "normal" ){
			return (<button type="button" onClick={this.props.toogleMode} 
				className="btn-sm w-50 button-color offset-md-6">Ejecución paso a paso</button>)
		}else {
			return (<button type="button" onClick={this.props.toogleMode} 
					className="btn-sm w-50 button-color offset-md-6">Ejecución normal</button>)
		}

	}
}

const mapStateToProps = (state) => {
	return {
		execution_mode: state.systemMemory.execution_mode
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toogleMode:() => dispatch(toogleExecutionMode()) 	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ModeButton)
