import React from 'react'
import './NavBar.css'



class NavBar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <label className="chlabel">CH Machine</label>
                <div className="justify-content-end">
                    <label className="chlabel">V 1.0</label>
                </div>
            </nav>

        )
    }

}


export default NavBar;
