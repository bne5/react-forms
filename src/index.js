import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Tab from './Comp/Tab';
import AppBar from './Comp/AppBar'

const App = () => (
    <MuiThemeProvider>
        <div>
            {/*<Tab/>*/}
            <AppBar/>
        </div>
    </MuiThemeProvider>
);

ReactDOM.render(<App/>, document.getElementById('root'));
