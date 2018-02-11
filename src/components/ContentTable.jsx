import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


export default class ContentTable extends React.Component { 

  render() {
    return (
      <div >
      <Table style={{width: 460}} >
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow >
            <TableHeaderColumn style={{textAlign: "center", backgroundColor:'whitesmoke'}}>ID</TableHeaderColumn>
            <TableHeaderColumn style={{textAlign: "center", backgroundColor:'whitesmoke'}}>Name</TableHeaderColumn>
            <TableHeaderColumn style={{textAlign: "center", backgroundColor:'whitesmoke'}}>Is Crypto</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody  displayRowCheckbox={false}>
          <TableRow >
            <TableRowColumn style={{textAlign: "center"}}>{this.props.value.id}</TableRowColumn>
            <TableRowColumn style={{textAlign: "center"}}>{this.props.value.name}</TableRowColumn>
            <TableRowColumn style={{textAlign: "center"}}>{this.props.value.is_crypto.toString()}</TableRowColumn>
          </TableRow>
                 
        </TableBody>
      </Table>
      </div>
    );
  }
}