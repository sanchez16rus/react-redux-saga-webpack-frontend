import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory, Route, IndexRedirect } from 'react-router';
//import { BrowserRouter, Route, IndexRedirect } from 'react-router-dom'
//import {Router, browserHistory, Route, IndexRedirect} from 'react-router';
import {Provider} from 'react-redux';
import store from './src/store';
import App from './src/containers/App';
import DepartmentGrid from './src/components/DepartmentGrid';
import EmployeeGrid from './src/components/EmployeeGrid';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="departments" />
                <Route path="departments" Name="Departments" component={DepartmentGrid}/>
                <Route path="employees" Name="Employees" component={EmployeeGrid}/>
            </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
);