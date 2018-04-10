import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Tabs, Tab} from 'material-ui/Tabs';

import Login from '../Pages/Login';
import Home from '../Pages/Register';
import ForgotPassword from '../Pages/ForgotPassword';

export default class extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Tabs>
                        <Tab label="Home">
                            <Home/>
                        </Tab>
                        <Tab label="Login">
                            <Login/>
                        </Tab>
                        <Tab label="Forgot Password">
                            <ForgotPassword/>
                        </Tab>
                    </Tabs>
                </div>
            </BrowserRouter>
        )

    }
}