import React from 'react';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Dashboard from '../Pages/Dashboard';
import { Route } from 'wouter';
import Panel from '../Pages/Components/Panel';
import Datatable from '../Pages/Components/Datatable';
import App from '../Layouts/App';
import Backend from '../Layouts/Backend';
import Guest from '../Layouts/Guest';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
export default function Wouter() {
    return (
        <>
            <Route path="/">
                <App component={<Home />} />
            </Route>
            <Route path="/about">
                <App component={<About />} />
            </Route>

            {/* <Route path="/login">
                <Guest component={<Login />} />
            </Route>
            <Route path="/register">
                <Guest component={<Register />} />
            </Route> */}
            <Guest>
                <Route path="/login" children={() => <Login/>} />
                <Route path="/register" children={() => <Register/>} />
            </Guest>
            <Backend>
                <Route path="/dashboard" children={() => <Dashboard/>} />
                <Route path="/components/panel" children={() => <Panel/>} />
                <Route path="/components/table" children={() => <Datatable/>} />
            </Backend>
        </>
    );
}
