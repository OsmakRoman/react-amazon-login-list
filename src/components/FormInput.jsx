import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectableList from './SelectableList.jsx';
import * as AWSCognito from 'amazon-cognito-identity-js';
import * as $ from 'jquery';


const style = {
  margin: '0px 25px'
  };

var data = JSON.parse ('{"status":"OK","ttl":30,"payload":[{"id":3,"code":"ETH","name":"Ethereum","is_crypto":true},{"id":2,"code":"BTC","name":"Bitcoin","is_crypto":true},{"id":4,"code":"USD","name":"US Dollar","is_crypto":false},{"id":1,"code":"EUR","name":"EURO","is_crypto":false}]}');

export default class FormInput extends React.Component { 
  
    constructor(props) {
      super(props);
     
      this.state = {
          login: '',
          password: '',
          payload: "EMPTY"
      };
      this.handleClick = this.handleClick.bind(this)
      this.handleChangeLogin = this.handleChangeLogin.bind(this)
      this.handleChangePassword = this.handleChangePassword.bind(this)   
    }
  
  
    handleClick (event) {
      console.log('Click');
      console.log('Login: '+this.state.login+ ', Password: '+this.state.password)

      this.setState ({
        payload: data.payload,
      })

      console.log(this.state.payload);
  
    //     var authenticationData = {
    //     Username : this.state.login,
    //     Password : this.state.password,
    // };
    // var authenticationDetails = new AWSCognito.AuthenticationDetails(authenticationData);

    // var poolData = {
    //     UserPoolId : 'XX-XXXX-XXXXXXXXXXX', // Your user pool id here
    //     ClientId : 'XXXXXXXXXXXXXXXXXXXXXXXXXX' // Your client id here
    // };
    // var userPool = new AWSCognito.CognitoUserPool(poolData);
    // var userData = {
    //     Username : this.state.login,
    //     Pool : userPool
    // };
    // var cognitoUser = new AWSCognito.CognitoUser(userData);
    
    // cognitoUser.authenticateUser(authenticationDetails, {
  
    //     onSuccess: (result)=> {
    //         console.log('access token + ' + result.getAccessToken().getJwtToken());
    //         console.log('idToken + ' + result.idToken.jwtToken);
           
                  
    //         $.ajax({
    //             url: 'https://XXXXXX.XXXXX.network/purses/currency', // Your web service url here
    //             type: 'GET',
    //             crossDomain: true,
    //             dataType: 'json',
             
                         
    //             success: (response) => {
    //               console.log("Success !!!");
    //               console.log(response.payload);
                 
    //               this.setState ({
    //                 payload: response.payload,
    //               }) 
    //             },
    //             error: (response) => {
    //               console.log('Error!!!');
    //               this.setState ({
    //                 payload: data.payload,
    //               })
                 
    //             }
    //           });
            
    //     },
    
    //     onFailure: function(err) {
    //         alert(err);
    //     },
    
    // });
      
    }


    handleChangeLogin (event) {
      this.setState({
        login: event.target.value,
      });


    }

    handleChangePassword (event) {
      this.setState({
        password: event.target.value,
      });

    }
  
      
    render() {
      
      return (
        <div >
          <div>
        <Paper zDepth={2}>
          <TextField style={style} hintText="Login" onChange={this.handleChangeLogin} value={this.state.login} underlineShow={false}  />
          <Divider />
          <TextField  style={style} hintText="Password" onChange={this.handleChangePassword} value={this.state.password} underlineShow={false} />
          <Divider />
          <RaisedButton onClick = {this.handleClick} label="LOGIN" backgroundColor = "yellowgreen"  fullWidth={true} />
        </Paper>
          </div>
        <br />
      
        <SelectableList data = {this.state.payload}/>
        </div>
        
      );
    }
  }
  