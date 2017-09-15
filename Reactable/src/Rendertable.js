import React, { Component } from 'react';

import Details from './Details';

class Rendertable extends Component {
  constructor(props) {
    super(props);
    this.targetItem = "";
    this.state = {click: "Clicked"};
    this.onItemClick = this.onItemClick.bind(this);

  }

  onItemClick(event) {
      //event.currentTarget.style.backgroundColor = '#ccc';
      this.targetItem=event.target.parentNode.childNodes[5].innerText;
      //console.log(event.target.parentNode.childNodes[5].innerText);

      this.setState({click: "Clicked"});
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
        <tbody id="tableData" onClick={this.onItemClick} >
            {this.props.mass.map((item, index)=>
              <tr key={index}><td className="num">{item.id}</td><td>{item.firstName}</td><td>{item.lastName}</td><td>{item.email}</td><td>{item.phone}</td><td className="zeroColl">{index}</td></tr>)}
        </tbody>
      </table>
      <Details targetItem={this.targetItem} items={this.props.mass}/>
      </div>
    );
  }
}

export default Rendertable;
