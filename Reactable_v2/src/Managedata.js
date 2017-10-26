import React, { Component } from 'react';
import Rendertable from './Rendertable';
import Find from './Find';

class Managedata extends Component {
  constructor(props) {
    super(props);
    this.state = {order: 1, sortColumn: 'id'};

    this.sortByColumn = this.sortByColumn.bind(this);
    this.sortPeople = this.sortPeople.bind(this);
  }

  sortPeople (personA, personB) {
    const sortColumn = this.state.sortColumn;
    if (this.state.order > 0) {
      return (personA[sortColumn] < personB[sortColumn]) ?  -1 : 1;
    }
    return (personA[sortColumn] < personB[sortColumn]) ?  1 : -1;
  }

  sortByColumn(column) {
    this.setState({
      sortColumn: column
    });
    this.props.items.sort(this.sortPeople);
    const newOrder = this.state.order *= -1;
    this.setState({order: newOrder});
  }

  render() {

    return (
      <div>
          <Find ms={this.props.newitems} findData2={this.props.findData}/>
          <Rendertable mass={this.props.items} onclickevent={this.sortByColumn} arrow={this.state.order} />
      </div>
    );
  }
}

export default Managedata;
