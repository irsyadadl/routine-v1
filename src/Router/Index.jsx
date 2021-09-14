import React from 'react';
import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
import { Switch, Route, Router, useLocation, useRouter } from 'wouter';
import Panel from '../Pages/Components/Panel';
import Datatable from '../Pages/Components/Datatable';
import App from '../Layouts/App';
import Backend from '../Layouts/Backend';
import Guest from '../Layouts/Guest';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
export default function Wouter() {
    const [location] = useLocation()
    return (
        <>
            <Switch>
                <Guest>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Guest>

                <App>
                    <Route path="/" component={Home} />
                </App>

                <Backend>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/components/table" component={Datatable} />
                    <Route path="/components/panel" component={Panel} />
                </Backend>
            </Switch>
        </>
    );
}
