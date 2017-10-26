import React, { Component } from 'react';

import Details from './Details';
import RenderTableRow from './RenderTableRow';

class Rendertable extends Component {
  constructor(props) {
    super(props);
    this.state = {targetItem: null};
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(item) {
      this.setState({targetItem: item});
  }

  render() {
    let arr = (this.props.arrow>0) ? <span className="arrow">	<span dangerouslySetInnerHTML={{__html: '&#9660'}} /></span> :
    <span className="arrow">	<span dangerouslySetInnerHTML={{__html: '&#9650'}} /></span>;
    return (
      <div>
        <table>
          <thead>
            <tr>
                <th onClick={()=> this.props.onclickevent("id")}>Id {arr} {this.span} </th>
                <th onClick={()=> this.props.onclickevent("firstName")}>FirstName {arr}</th>
                <th onClick={()=> this.props.onclickevent("lastName")}>LastName {arr}</th>
                <th onClick={()=> this.props.onclickevent('email')}>Email {arr}</th>
                <th onClick={()=> this.props.onclickevent('phone')}>Phone {arr}</th>
            </tr>
          </thead>
          <tbody id="tableData">
              {this.props.mass.map((item, index)=>
                <RenderTableRow key={index} item={item} itemClicked={this.handleItemClick} />
                )}
          </tbody>
        </table>
        <Details targetItem={this.state.targetItem}/>
      </div>
    );
  }
}

export default Rendertable;
