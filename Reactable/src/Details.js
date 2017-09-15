import React, { Component } from 'react';



class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let res ="";
    let show="";
    if (!!this.props.targetItem &&  !!this.props.items[this.props.targetItem]) {
      res=+this.props.targetItem;
      show=this.props.items[res];
      return(
        <div id="info">
        <p> Выбран пользователь:<b> {show.firstName} {show.lastName} </b></p>
        <textarea value={show.description}> </textarea>
        <p> Адрес проживания:<b> {show.address.streetAddress} </b></p>
        <p>Город: <b> {show.address.city}  </b></p>
        <p>Провинция/штат: <b> {show.address.state} </b></p>
        <p>Индекс:  <b> {show.address.zip} </b></p>
        </div>
      );
    }
    return <div> </div>
  }

}

export default Details;
