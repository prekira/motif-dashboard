import React from 'react';
import { Button } from 'reactstrap';
import CameraComponent from './CameraComponent';

class UnitComponent extends React.Component {
  constructor(props) {
    super();
    this.type_name = props.type_name;
    if(this.type_name == "Unit") {
      this.num_cams = 6;
      this.num_cam_per_row = 2;

    } else if(this.type_name == "Operant") {
      this.num_cams = 4;
      this.num_cam_per_row = 2;

    } else {
      this.num_cams = 1;
      this.num_cam_per_row =1;

    }
    this.start_id = (props.start_id-1)*this.num_cams;

  }
  
  //  <CameraComponent id={this.start_id + i*2 +1 }/>)
  //items.push(<div className="Cam-row">);
  // items.push(</div>);
   
  render() {
    let items = []
    //make rows of cameras in unit
    for(var i = 1; i <= this.num_cams/this.num_cam_per_row; i++) {
      let row = []
      for(var j = 1; j <= this.num_cam_per_row; j++ ) {
        row.push(<CameraComponent id={this.start_id + (i-1)*this.num_cam_per_row + j }/>)
      }
      items.push(<div className="Cam-row"> {row} </div>);
    }
    return (
     <div className="Unit">
      <div className="unit-text">{this.props.type_name} {this.props.start_id} </div>
      {items}
    </div>
    );
  }
  
}

export default UnitComponent;
