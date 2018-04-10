import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../Pages/Register';
import Login from '../Pages/Login';
import ForgotPassword from '../Pages/ForgotPassword';

export default class extends Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/forgot' component={ForgotPassword}/>
                </Switch>
            </div>
        )
    }
}


