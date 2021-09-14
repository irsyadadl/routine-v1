import React from 'react';
import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
import { Switch, Route, Router } from 'wouter';
import Panel from '../Pages/Components/Panel';
import Datatable from '../Pages/Components/Datatable';
import App from '../Layouts/App';
import Guest from '../Layouts/Guest';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
export default function Wouter() {
    return (
        <>
            <App>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Router exact base="/components">
                        <Route path="/table" component={Datatable} />
                        <Route path="/panel" component={Panel} />
                    </Router>
                </Switch>
            </App>
            <Guest>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
            </Guest>
        </>
    );
}
