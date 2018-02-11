import React, {Component} from 'react';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import ContentTable from './ContentTable.jsx';


var divStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center' 
};


export default class SelectableList extends React.Component { 

  constructor(props) {
    super(props);
   
    this.state = {
        payload: this.props.data,
        item: this.props.data[0]
      
      
    };

    this.handleClick = this.handleClick.bind(this)
    
  }

  componentWillReceiveProps (newProps) {
    this.setState({
    payload: newProps.data,
    item: newProps.data[0]
    });
    }

  handleClick (x) {
    console.log(x);
    this.setState( { item: this.props.data[x]})  
  }

    
  render() {
    if (this.state.payload == "EMPTY")
    return (<div> </div>)
    
    return (
      <div  style={divStyle} >

      <div style={{width: 200}} >
      <Paper   zDepth={2}>
      <List>

         {Object.keys(this.state.payload).map(x => {
              return <div  key={x} >
              <ListItem style={{textAlign: "center"}} onClick={this.handleClick.bind(this, x)} >{this.state.payload[x].code}</ListItem>
             <Divider /> 
                   </div>}
 
         ) }    
       </List> 
      </Paper>
      </div> 

      <br/>
      <Paper zDepth={2}>
      <ContentTable value = {this.state.item}/>
      </Paper>
     
      </div>
      
    );
  }
}
