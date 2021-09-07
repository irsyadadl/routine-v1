import React from 'react';
import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
import { Switch, Route, Router } from 'wouter';
import Panel from '../Pages/Components/Panel';
import Table from '../Pages/Components/Table';
export default function Wouter() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />

                <Route path="/components/table" component={Table} />
                <Route path="/components/panel" component={Panel} />

        </Switch>
    );
}
