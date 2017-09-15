import React, { Component } from 'react';



class Find extends Component {
  constructor(props) {
    super(props);
    this.searchTable = this.searchTable.bind(this);
  }

  searchTable(){
    let str=document.getElementById("search").value;
    str=str.toLowerCase();
    var result=[];
    if (!this.props.ms[0]){
      return;
    }
    for (let i=0; i<this.props.ms.length; i++){
      if(~String(this.props.ms[i]["id"]).indexOf(str)||(~this.props.ms[i]["firstName"].toLowerCase().indexOf(str))||(~this.props.ms[i]["lastName"].toLowerCase().indexOf(str))||(~this.props.ms[i]["email"].toLowerCase().indexOf(str))||
      (~String(this.props.ms[i]["phone"]).toLowerCase().indexOf(str)) ){
        result.push(this.props.ms[i]);
      }
    }
  this.props.findData2(result)

  }


  render() {
    console.log(this.props);
    return (
      <div className="form">
        <input type="search" id="search" placeholder="Поиск"></input>
        <button id="searchBtn"  onClick={this.searchTable}>Поиск</button>
      </div>
    );
  }
}

export default Find;
