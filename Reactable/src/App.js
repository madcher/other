import React, { Component } from 'react';
import Managedata from './Managedata';



class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        lst: []
      };
      this.newstate =[];
      this.loadData = this.loadData.bind(this);
      this.changePageDown = this.changePageDown.bind(this);
      this.changePageUp = this.changePageUp.bind(this);
      this.pageNumber = 1;
      this.start=0;
      this.end=50;
      this.loading = "";
     }

  loadingFunc(){
    this.loading = "loading....";
    console.log(this.loading);
    this.setState({ lst: [] });

  }

  loadData(num){
    this.loadingFunc();
    let url = (num==1)? 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}':
    "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
    fetch(url)
    .then((res) => {
    return res.json();
    })
    .then((res) => {
    this.newstate = res;
    this.loading = "";
    this.setState({ lst: res });
    });
    console.log("sfsfsfafa2");
  }

  search(mass){
      this.setState({lst: mass });
  }

  changePageDown(){
    this.pageNumber--;
    if (this.pageNumber<1){
      this.pageNumber=20;
    }
    this.end=this.pageNumber*50;
    this.start=this.end-50;
    let mass=this.newstate.slice(this.start, this.end)
    this.setState({lst: mass });
  }

  changePageUp(){
    this.pageNumber++;
    if (this.pageNumber>20){
      this.pageNumber=1;
    }
    this.end=this.pageNumber*50;
    this.start=this.end-50;
    let mass=this.newstate.slice(this.start, this.end)
    this.setState({lst: mass });
  }


  render() {
    let navigate;

    if (this.state.lst.length>=50){
      navigate = <div>
      <button onClick={this.changePageDown}>Prev</button>
        Page {this.pageNumber}
      <button onClick={this.changePageUp}>Next</button>
      </div>;
    }
    return (
      <div className="form">
        <button onClick={ ()=> this.loadData("1")}>SMALL</button>
        <button onClick={()=> this.loadData("2")}>BIG</button>
        <Managedata items={this.state.lst.slice(0,50)} newitems={this.newstate} findData={this.search.bind(this)}/>
        <div>{this.loading}</div>
        {navigate}
      </div>
    );
  }
}

export default App;
