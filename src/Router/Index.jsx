import React from 'react';
import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
import { Switch, Route, Router } from 'wouter';
import Panel from '../Pages/Components/Panel';
import Datatable from '../Pages/Components/Datatable';
export default function Wouter() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/components/table" component={Datatable} />
            <Route path="/components/panel" component={Panel} />
        </Switch>
    );
}
