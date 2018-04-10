import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Menu from 'material-ui/svg-icons/navigation/menu';
import MenuItem from 'material-ui/MenuItem';
import Routing from './Routing'


import Login from '../Pages/Login';
import Home from '../Pages/Register';
import ForgotPassword from '../Pages/ForgotPassword';



export default class extends Component {

    render () {
        const handleClick= (match) => {
            window.location.replace(match)
        };
        return (
            <BrowserRouter>
                <div>
                    <div>
                        Hello Appbar
                    </div>
                    <AppBar iconElementLeft={
                        <IconMenu iconButtonElement={
                                <IconButton><Menu /></IconButton>
                            }
                        >
                            <MenuItem onClick={() => handleClick('/')}>
                                Home
                            </MenuItem>
                            <MenuItem onClick={() => handleClick('/login')}>
                                Login
                            </MenuItem>
                            <MenuItem onClick={() => handleClick('/forgot')}>
                                Forgot Password
                            </MenuItem>
                        </IconMenu>}>
                    </AppBar>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/forgot' component={ForgotPassword}/>
                    </Switch>
                </div>
            </BrowserRouter>

        )

    }
}



