import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Home = () => (
    <div>
        <TextField
            hintText="Jack or Jane"
            errorText="Required"
            floatingLabelText="First Name"
        /><br />
        <TextField
            hintText="Skeleton"
            errorText="Required"
            floatingLabelText="Last Name"
        /><br />
        <TextField
            hintText="wilecoyote@acme.com"
            errorText="Required"
            floatingLabelText="Email Address"
            type="text"
        /><br />
        <TextField
            hintText="1234567890"
            errorText="Required"
            floatingLabelText="Phone Number"
        /><br />
        <TextField
            hintText="Number of times around the sun"
            errorText="Required."
            floatingLabelText="Age"
            type="number"
        /><br />
        <TextField
            hintText="Password"
            errorText="Required"
            floatingLabelText="Password"
            type="password"
        /><br />
        <TextField
            hintText="Re-enter Password"
            errorText="Required"
            floatingLabelText="Confirm Password"
            type="password"
        /><br />
        <RaisedButton label="Submit" />
        <RaisedButton label="Clear" />
    </div>
);

export default Home;