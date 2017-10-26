import React, { Component } from 'react';

import Details from './Details';

class RenderTableRow extends Component {
  constructor(props) {
    super(props);

    this.handleRowClick = this.handleRowClick.bind(this);
  }

  handleRowClick () {
      this.props.itemClicked(this.props.item);
  }

  render() {
    return (<tr onClick={this.handleRowClick}>
        <td className="num">{this.props.item.id}</td>
        <td>{this.props.item.firstName}</td>
        <td>{this.props.item.lastName}</td>
        <td>{this.props.item.email}</td>
        <td>{this.props.item.phone}</td>
        <td className="zeroColl"></td>
    </tr>);
  }
};

export default RenderTableRow;