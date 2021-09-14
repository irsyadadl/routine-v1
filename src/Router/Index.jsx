import React from 'react';
import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
import { Switch, Route } from 'wouter';
import Panel from '../Pages/Components/Panel';
import Datatable from '../Pages/Components/Datatable';
import App from '../Layouts/App';
import Guest from '../Layouts/Guest';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
export default function Wouter() {
    return (
        <>
            <Switch>
                <App>
                    <Route path="/" component={Home} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/components/table" component={Datatable} />
                    <Route path="/components/panel" component={Panel} />
                </App>

                <Guest>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Guest>
            </Switch>
        </>
    );
}
