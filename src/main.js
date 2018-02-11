import ReactDOM from 'react-dom';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormInput from './components/FormInput.jsx';

const style = {
    
    width: '600px',
    margin: 'auto'   

  };

ReactDOM.render(
   <MuiThemeProvider>
   <div style = {style}>
   <br />
   <br />
   <br />
   <FormInput />
    <br />
   <br />
   </div>
 </MuiThemeProvider>,
    document.getElementById('mount-point')
);