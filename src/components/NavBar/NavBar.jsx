import React from 'react'
import './NavBar.css'
import { Link } from "react-router-dom"



class NavBar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <label className="chlabel">CH Machine</label>
                <Link to="/"><button className="btn-sm button-color">Round Robbin</button></Link>
                <Link to="/SJF"><button className="btn-sm button-color">SJF</button></Link>
                <Link to="/FCFS"><button className="btn-sm button-color">FCFS</button></Link>
                <Link to="/Priority"><button className="btn-sm button-color">Prioridad</button></Link>
                <div className="justify-content-end">
                    <label className="chlabel">V 1.0</label>
                </div>
            </nav>

        )
    }

}


export default NavBar;
