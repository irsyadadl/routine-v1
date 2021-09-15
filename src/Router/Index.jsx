import React from 'react';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Dashboard from '../Pages/Dashboard';
import { Route, Switch } from 'wouter';
import Panel from '../Pages/Components/Panel';
import Datatable from '../Pages/Components/Datatable';
import App from '../Layouts/App';
import Backend from '../Layouts/Backend';
import Guest from '../Layouts/Guest';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
import Forgot from '../Pages/Auth/Forgot';
import Reset from '../Pages/Auth/Reset';
export default function Wouter() {
    return (
        <Switch>
            <Route path="/">
                <App component={<Home />} />
            </Route>
            <Route path="/about">
                <App component={<About />} />
            </Route>

            <Route path="/login">
                <Guest component={<Login />} />
            </Route>
            <Route path="/register">
                <Guest component={<Register />} />
            </Route>
            <Route path="/forgot">
                <Guest component={<Forgot />} />
            </Route>
            <Route path="/reset">
                <Guest component={<Reset />} />
            </Route>
            <Backend>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/components/panel" component={Panel}/>
                <Route path="/components/table" component={Datatable}/>
            </Backend>
        </Switch>
    );
}
