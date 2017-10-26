import React, { Component } from 'react';

class Details extends Component {

  render() {
    if (this.props.targetItem) {
      return(
        <div id="info">
        <p> Выбран пользователь:<b> {this.props.targetItem.firstName} {this.props.targetItem.lastName} </b></p>
        <textarea value={this.props.targetItem.description}> </textarea>
        <p> Адрес проживания:<b> {this.props.targetItem.address.streetAddress} </b></p>
        <p>Город: <b> {this.props.targetItem.address.city}  </b></p>
        <p>Провинция/штат: <b> {this.props.targetItem.address.state} </b></p>
        <p>Индекс:  <b> {this.props.targetItem.address.zip} </b></p>
        </div>
      );
    }
    return <div> </div>
  }

}

export default Details;
