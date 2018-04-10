import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Login = () => (
    <div>
        <TextField
            hintText="wilecoyote@acme.com"
            errorText="Required"
            floatingLabelText="Email"
        /><br />
        <TextField
            hintText="Password"
            errorText="Required"
            floatingLabelText="Password"
            type="password"
        /><br />
        <RaisedButton label="Submit" />
    </div>
);

export default Login;