import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';
import RoundRobin from './components/RoundRobin/RoundRobin.jsx'
import SJF from './components/SJF/SJF.jsx'
import FCFS from './components/FCFS/FCFS.jsx';
import  NavBar from './components/NavBar/NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider} from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router,
         Switch,
         Route
         } from "react-router-dom"

ReactDOM.render(
        <React.StrictMode>
                <Provider store = { store }>
                        <Router>
                                <NavBar />
                                <Switch>
                                        <Route exact path="/">
                                                <RoundRobin /> 
                                        </Route>
                                        <Route exact path="/SJF">
                                                <SJF />
                                        </Route>
                                        <Route exact path="/FCFS">
                                                <App />
                                        </Route>
                                        <Route exact path="/Priority">
                                                <FCFS />
                                        </Route>
                                </Switch>
                        </Router>
                </Provider>
        </React.StrictMode>,
        document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
