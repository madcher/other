import React, { Component } from 'react';
import Rendertable from './Rendertable';
import Find from './Find';



class Managedata extends Component {
  constructor(props) {
    super(props);
    this.state = {order: 1};
    this.a = [];
  }

  onClickevent(num) {
    var indx = this.state.order;
    var res2;
    var sortData=function(personA, personB){
      if (indx>0){
        res2=(personA[num] < personB[num]) ?  -1 : 1;
      }
      else {
        res2=(personA[num] < personB[num]) ?  1 : -1;
      }
      return res2;
    }
    this.props.items.sort(sortData);

    indx*=-1;
    this.setState({order: indx});
  }




  render() {

    return (
      <div>
          <Find ms={this.props.newitems} findData2={this.props.findData}/>
          <Rendertable mass={this.props.items} onclickevent={this.onClickevent.bind(this)} arrow={this.state.order} />
      </div>
    );
  }
}

export default Managedata;
