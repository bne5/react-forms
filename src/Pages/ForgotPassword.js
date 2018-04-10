import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Forgot = () => (
    <div>
        <TextField
            hintText="wilecoyote@acme.com"
            errorText="Required"
            type="email"
            floatingLabelText="Email"
        /><br />
        <RaisedButton label="Submit" />
    </div>
);

export default Forgot;